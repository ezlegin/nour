"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Browsers allow only about sixteen WebGL contexts per page and silently drop
 * the oldest one past that. A long product grid can put more 3D cards on
 * screen than that, so cards share a fixed number of slots: a card renders
 * live only while it holds one. When more cards want a slot than there are,
 * the longest-running card hands its slot on after TURN and waits again, so
 * every card gets its turn (a card without a slot shows its last frame).
 */
const SLOTS = 10;
const TURN = 7000;

type Entry = { grant: (on: boolean) => void; revoke: () => void };

const live: Entry[] = [];
const waiting: Entry[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;

function fill() {
  while (live.length < SLOTS && waiting.length) {
    const next = waiting.shift()!;
    live.push(next);
    next.grant(true);
  }
  if (waiting.length && !timer) timer = setTimeout(rotate, TURN);
}

function rotate() {
  timer = null;
  if (waiting.length && live.length) {
    const out = live.shift()!;
    out.revoke();
    out.grant(false);
    waiting.push(out);
  }
  fill();
}

function leave(entry: Entry) {
  for (const list of [live, waiting]) {
    const at = list.indexOf(entry);
    if (at >= 0) list.splice(at, 1);
  }
  fill();
}

/**
 * True while this component may keep a WebGL canvas mounted. `onRevoke` runs
 * just before a slot is taken away, while the canvas still exists.
 */
export function useGlSlot(wanted: boolean, onRevoke?: () => void) {
  const [granted, setGranted] = useState(false);
  const revoke = useRef(onRevoke);

  useEffect(() => {
    revoke.current = onRevoke;
  }, [onRevoke]);

  useEffect(() => {
    if (!wanted) return;
    const entry: Entry = { grant: setGranted, revoke: () => revoke.current?.() };
    waiting.push(entry);
    fill();
    return () => {
      leave(entry);
      setGranted(false);
    };
  }, [wanted]);

  return granted;
}
