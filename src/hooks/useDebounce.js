import { useRef, useEffect } from "react"

const useDebounce = (callback, delay) => {
  const timeoutIdRef = useRef(null)

  const debounchedCallback = (...args) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  return debounchedCallback
}

export { useDebounce }
