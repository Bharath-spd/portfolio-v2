import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useTypewriter } from "./useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("types the first word one character at a time", () => {
    const words = ["Hi", "There"];
    const { result } = renderHook(() => useTypewriter(words, 10, 100));
    expect(result.current).toBe("");
    act(() => void vi.advanceTimersByTime(10));
    expect(result.current).toBe("H");
    act(() => void vi.advanceTimersByTime(10));
    expect(result.current).toBe("Hi");
  });

  it("deletes the word after the pause and moves on to the next", () => {
    const words = ["Hi", "Yo"];
    const { result } = renderHook(() => useTypewriter(words, 10, 100));
    const seen: string[] = [];
    // Step in small increments so React re-runs the effect between timers.
    for (let i = 0; i < 100; i++) {
      act(() => void vi.advanceTimersByTime(10));
      seen.push(result.current);
    }
    expect(seen).toContain("Hi");
    expect(seen).toContain("H");
    expect(seen).toContain("Y");
    expect(seen.indexOf("Y")).toBeGreaterThan(seen.indexOf("Hi"));
  });
});
