import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Custom hook that types and deletes a rotating list of words/sentences.
 * No external libraries — pure React state + effects with proper cleanup.
 */
export function useTypewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 1800,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing forward
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);

        if (next === currentWord) {
          // Full word typed — pause, then start deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting backward
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);

        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      timeoutRef.current = setTimeout(
        tick,
        isDeleting ? deletingSpeed : typingSpeed
      );
    };

    timeoutRef.current = setTimeout(
      tick,
      isDeleting ? deletingSpeed : typingSpeed
    );

    // Cleanup prevents memory leaks / stale timeouts on unmount or re-render
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}