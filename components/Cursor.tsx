'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animate)

    const handleEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2)'
      if (ringRef.current) {
        ringRef.current.style.width = '50px'
        ringRef.current.style.height = '50px'
        ringRef.current.style.borderColor = 'rgba(217,119,6,0.7)'
      }
    }

    const handleLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(217,119,6,0.4)'
      }
    }

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
