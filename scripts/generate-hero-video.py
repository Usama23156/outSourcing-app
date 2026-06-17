#!/usr/bin/env python3
"""Generate hero background video with rotating X icon (no brand logo watermark)."""

from __future__ import annotations

import math
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw

WIDTH = 1920
HEIGHT = 1080
FPS = 24
DURATION = 12
FRAMES = FPS * DURATION
OUT_DIR = Path(__file__).resolve().parent.parent / "public"
FRAMES_DIR = Path("/tmp/hero-video-frames")


def draw_x_icon(
    draw: ImageDraw.ImageDraw,
    cx: float,
    cy: float,
    angle: float,
    scale: float,
) -> None:
    def bar(x1, y1, x2, y2, width, color):
        dx, dy = x2 - x1, y2 - y1
        length = math.hypot(dx, dy) or 1
        nx, ny = -dy / length * width / 2, dx / length * width / 2
        points = [
            (x1 + nx, y1 + ny),
            (x2 + nx, y2 + ny),
            (x2 - nx, y2 - ny),
            (x1 - nx, y1 - ny),
        ]
        draw.polygon(points, fill=color)

    cos_a, sin_a = math.cos(angle), math.sin(angle)
    half = 180 * scale

    for sign in (-1, 1):
        for layer, width, color, size in (
            (0, 52, (10, 26, 47), 1.0),
            (1, 42, (238, 99, 82), 0.88),
        ):
            x1, y1 = -half * size * sign, -half * size
            x2, y2 = half * size * sign, half * size
            rx1 = cx + x1 * cos_a - y1 * sin_a
            ry1 = cy + x1 * sin_a + y1 * cos_a
            rx2 = cx + x2 * cos_a - y2 * sin_a
            ry2 = cy + x2 * sin_a + y2 * cos_a
            bar(rx1, ry1, rx2, ry2, width * scale, color)


def render_frame(t: float) -> Image.Image:
    base = Image.new("RGBA", (WIDTH, HEIGHT), (10, 26, 47, 255))
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    glow_x = int(WIDTH * 0.72 + math.sin(t * 1.4) * 48)
    glow_y = int(HEIGHT * 0.46 + math.cos(t * 1.1) * 36)
    draw.ellipse(
        [glow_x - 520, glow_y - 520, glow_x + 520, glow_y + 520],
        fill=(238, 99, 82, 28),
    )
    draw.ellipse(
        [glow_x - 320, glow_y - 320, glow_x + 320, glow_y + 320],
        fill=(61, 90, 115, 35),
    )

    secondary_x = int(WIDTH * 0.18 + math.cos(t * 0.9) * 30)
    secondary_y = int(HEIGHT * 0.25 + math.sin(t * 0.7) * 24)
    draw.ellipse(
        [secondary_x - 280, secondary_y - 280, secondary_x + 280, secondary_y + 280],
        fill=(16, 39, 66, 90),
    )

    img = Image.alpha_composite(base, overlay)
    icon_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    icon_draw = ImageDraw.Draw(icon_layer)

    angle = (t / DURATION) * math.tau
    draw_x_icon(icon_draw, WIDTH * 0.72, HEIGHT * 0.46, angle, 1.35)

    return Image.alpha_composite(img, icon_layer).convert("RGB")


def main() -> None:
    FRAMES_DIR.mkdir(parents=True, exist_ok=True)
    for old in FRAMES_DIR.glob("frame_*.png"):
        old.unlink()

    for frame in range(FRAMES):
        t = frame / FPS
        render_frame(t).save(FRAMES_DIR / f"frame_{frame:04d}.png")
        if frame % 24 == 0:
            print(f"Rendered frame {frame + 1}/{FRAMES}")

    video_path = OUT_DIR / "hero-background-video.mp4"
    poster_path = OUT_DIR / "hero-video-poster.jpg"

    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-framerate",
            str(FPS),
            "-i",
            str(FRAMES_DIR / "frame_%04d.png"),
            "-c:v",
            "libx264",
            "-preset",
            "medium",
            "-crf",
            "22",
            "-pix_fmt",
            "yuv420p",
            "-movflags",
            "+faststart",
            str(video_path),
        ],
        check=True,
    )

    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(video_path),
            "-vframes",
            "1",
            "-q:v",
            "2",
            str(poster_path),
        ],
        check=True,
    )

    print(f"Wrote {video_path}")
    print(f"Wrote {poster_path}")


if __name__ == "__main__":
    main()
