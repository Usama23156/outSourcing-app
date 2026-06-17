#!/usr/bin/env python3
"""Generate hero background video with rotating brand mark (flat, no shadow)."""

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
MARK_PATH = OUT_DIR / "hero-mark-flat.png"
NAVY = (10, 26, 47, 255)


def prepare_mark() -> Image.Image:
    if not MARK_PATH.exists():
        source = OUT_DIR / "hero-logo.png"
        img = Image.open(source).convert("RGBA")
        pixels = img.load()
        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = pixels[x, y]
                if r > 235 and g > 235 and b > 235:
                    pixels[x, y] = (r, g, b, 0)
        img.save(MARK_PATH)

    return Image.open(MARK_PATH).convert("RGBA")


def render_frame(t: float, mark: Image.Image) -> Image.Image:
    frame = Image.new("RGBA", (WIDTH, HEIGHT), NAVY)

    ambient = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(ambient)

    drift_x = int(WIDTH * 0.18 + math.cos(t * 0.9) * 24)
    drift_y = int(HEIGHT * 0.22 + math.sin(t * 0.7) * 18)
    draw.ellipse(
        [drift_x - 240, drift_y - 240, drift_x + 240, drift_y + 240],
        fill=(16, 39, 66, 55),
    )

    frame = Image.alpha_composite(frame, ambient)

    angle = (t / DURATION) * 360
    scale = 0.62
    target_w = int(mark.width * scale)
    target_h = int(mark.height * scale)
    resized = mark.resize((target_w, target_h), Image.Resampling.LANCZOS)
    rotated = resized.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)

    icon_x = int(WIDTH * 0.72 - rotated.width / 2)
    icon_y = int(HEIGHT * 0.46 - rotated.height / 2)
    frame.alpha_composite(rotated, (icon_x, icon_y))

    return frame.convert("RGB")


def main() -> None:
    mark = prepare_mark()
    FRAMES_DIR.mkdir(parents=True, exist_ok=True)
    for old in FRAMES_DIR.glob("frame_*.png"):
        old.unlink()

    for frame in range(FRAMES):
        t = frame / FPS
        render_frame(t, mark).save(FRAMES_DIR / f"frame_{frame:04d}.png")
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
            "-update",
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
