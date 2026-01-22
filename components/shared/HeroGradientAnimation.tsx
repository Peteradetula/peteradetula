'use client'

import heroGradient from '@/public/images/hero-gradient-background.png'
import { useGSAP } from '@gsap/react'
import { gsap, Linear } from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface PropsType {
  scale?: boolean
}

export default function HeroGradientAnimation({ scale = false }: PropsType) {
  const [isClient, setIsClient] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useGSAP(
    () => {
      if (!isClient) return
      if (!wrapperRef.current || !bgRef.current) return

      const wrapperAnimation = gsap.to(wrapperRef.current, {
        scale: 0.6,
        repeat: -1,
        duration: 3,
        yoyo: true,
        ease: Linear.easeNone,
      })

      const bgAnimation = gsap.to(bgRef.current, {
        repeat: -1,
        duration: 3,
        rotation: 360,
        ease: Linear.easeNone,
      })

      return () => {
        wrapperAnimation.kill()
        bgAnimation.kill()
      }
    },
    { dependencies: [isClient] },
  )

  return (
    <div
      ref={wrapperRef}
      className={[
        'absolute left-0 top-0 -z-10 h-full w-full blur-[50px]',
        scale ? 'scale-75' : 'scale-100',
      ].join(' ')}
    >
      <div ref={bgRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src={heroGradient} alt="hero-gradient-background" priority placeholder="blur" />
      </div>
    </div>
  )
}
