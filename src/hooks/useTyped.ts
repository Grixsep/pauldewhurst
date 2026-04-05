"use client";
import { useState, useEffect, useCallback } from "react";

export function useTyped(strings: string[], typeSpeed = 80, backSpeed = 50, backDelay = 1800) {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = strings[stringIndex];
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));
      if (text.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), backDelay);
        return;
      }
    } else {
      setText(current.substring(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [text, stringIndex, isDeleting, strings, backDelay]);

  useEffect(() => {
    const speed = isDeleting ? backSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, backSpeed, typeSpeed]);

  return text;
}
