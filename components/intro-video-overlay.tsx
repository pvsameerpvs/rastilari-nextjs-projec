"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src?: string;
  durationMs?: number; // total show time
  skipAfterMs?: number; // show skip button after
};

export default function IntroVideoOverlay({
  src = "/sun-desk-intro.webm",
  durationMs = 10000,
  skipAfterMs = 3000,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = useState(false);
  const [canSkip, setCanSkip] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    setOpen(true);
    setCanSkip(false);

    const tSkip = window.setTimeout(() => setCanSkip(true), skipAfterMs);
    const tClose = window.setTimeout(() => close(), durationMs);

    return () => {
      window.clearTimeout(tSkip);
      window.clearTimeout(tClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    videoRef.current?.play().catch(() => {});
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={() => (canSkip ? close() : null)}
      />

      {/* Center Video */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={src}
            muted
            autoPlay
            playsInline
            preload="auto"
            className="h-[240px] w-full object-cover sm:h-[360px] md:h-[420px]"
            onEnded={close}
          />

          {/* soft overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          {/* Skip button */}
          <div className="absolute right-4 top-4 flex items-center gap-2">
            {canSkip ? (
              <button
                onClick={close}
                className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 hover:bg-white"
              >
                Skip
              </button>
            ) : (
              <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                Skip in 3s
              </div>
            )}
          </div>

          {/* Bottom text */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Rasti Lari Group
            </div>
            <div className="text-xs text-white/70">
              Auto closing in {Math.ceil(durationMs / 1000)} seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
