import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useInViewAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
};

export const useStaggerAnimation = (items: unknown[], delay = 0.1) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const addVisibleItem = (index: number) => {
    setVisibleItems((prev) => new Set([...prev, index]));
  };

  const isVisible = (index: number) => visibleItems.has(index);

  return { addVisibleItem, isVisible, delay };
};
