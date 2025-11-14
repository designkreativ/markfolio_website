"use client"

import { useEffect, useState } from "react"

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)

    const handle = (ev?: MediaQueryListEvent) => {
      setIsMobile(ev ? ev.matches : mq.matches)
    }

    // Set initial value
    handle()

    // Prefer modern API but fall back for older browsers
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handle)
      return () => mq.removeEventListener("change", handle)
    }

    // @ts-ignore - legacy
    mq.addListener(handle)
    return () => {
      // @ts-ignore - legacy
      mq.removeListener(handle)
    }
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
