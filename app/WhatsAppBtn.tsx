'use client'
import { useEffect, useRef } from 'react'

export default function WhatsAppFAB() {
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    let isDragging = false
    let hasMoved = false
    let startX = 0, startY = 0

    const getPos = () => btn.getBoundingClientRect()

    const onMouseDown = (e: MouseEvent) => {
      const rect = getPos()
      isDragging = true
      hasMoved = false
      startX = e.clientX - rect.left
      startY = e.clientY - rect.top
      btn.style.right = 'auto'
      btn.style.bottom = 'auto'
      btn.style.left = rect.left + 'px'
      btn.style.top = rect.top + 'px'
      e.preventDefault()
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      hasMoved = true
      const x = Math.max(0, Math.min(window.innerWidth - btn.offsetWidth, e.clientX - startX))
      const y = Math.max(0, Math.min(window.innerHeight - btn.offsetHeight, e.clientY - startY))
      btn.style.left = x + 'px'
      btn.style.top = y + 'px'
    }

    const onMouseUp = () => { isDragging = false }

    const onClick = (e: MouseEvent) => {
      if (hasMoved) e.preventDefault() // block link if dragged
    }

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const rect = getPos()
      isDragging = true
      hasMoved = false
      startX = touch.clientX - rect.left
      startY = touch.clientY - rect.top
      btn.style.right = 'auto'
      btn.style.bottom = 'auto'
      btn.style.left = rect.left + 'px'
      btn.style.top = rect.top + 'px'
      e.preventDefault()
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      hasMoved = true
      const touch = e.touches[0]
      const x = Math.max(0, Math.min(window.innerWidth - btn.offsetWidth, touch.clientX - startX))
      const y = Math.max(0, Math.min(window.innerHeight - btn.offsetHeight, touch.clientY - startY))
      btn.style.left = x + 'px'
      btn.style.top = y + 'px'
      e.preventDefault()
    }

    const onTouchEnd = () => { isDragging = false }

    btn.addEventListener('mousedown', onMouseDown)
    btn.addEventListener('click', onClick)
    btn.addEventListener('touchstart', onTouchStart, { passive: false })
    btn.addEventListener('touchmove', onTouchMove, { passive: false })
    btn.addEventListener('touchend', onTouchEnd)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      btn.removeEventListener('mousedown', onMouseDown)
      btn.removeEventListener('click', onClick)
      btn.removeEventListener('touchstart', onTouchStart)
      btn.removeEventListener('touchmove', onTouchMove)
      btn.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <a
      ref={btnRef}
      href="https://wa.me/919015401540"
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{ cursor: 'grab' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="28" height="28" aria-hidden="true">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.463 2.027 7.754L0 32l8.522-2.003A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.766-1.843l-.485-.287-5.056 1.188 1.213-4.929-.317-.506A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.961c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.631-.199-.897.199-.266.398-1.029 1.295-1.262 1.561-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.981-2.361-2.213-2.759-.232-.398-.025-.613.175-.811.179-.179.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.163-1.229-2.961-.324-.778-.653-.673-.897-.685l-.764-.013c-.266 0-.697.1-.1063.498-.365.398-1.395 1.362-1.395 3.325s1.428 3.857 1.627 4.123c.199.266 2.808 4.287 6.805 6.013.951.411 1.693.656 2.271.84.954.304 1.823.261 2.509.158.765-.114 2.354-.962 2.687-1.891.333-.929.333-1.726.232-1.891-.099-.166-.365-.266-.763-.465z"/>
      </svg>
    </a>
  )
}