import { useState, useEffect, useRef } from 'react'

export const useLazyLoad = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.loadOnce) {
            setHasLoaded(true)
          }
        } else if (!options.loadOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px'
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [options.threshold, options.rootMargin, options.loadOnce])

  return [elementRef, isVisible, hasLoaded]
}

export const useImageLazyLoad = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [isLoaded, setIsLoaded] = useState(false)
  const [ref, isVisible] = useLazyLoad({ loadOnce: true })

  useEffect(() => {
    if (isVisible && src) {
      const img = new Image()
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true)
      }
      img.src = src
    }
  }, [isVisible, src])

  return [ref, imageSrc, isLoaded]
}

export const useComponentLazyLoad = (delay = 0) => {
  const [ref, isVisible] = useLazyLoad({ loadOnce: true })
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  return [ref, shouldRender]
} 