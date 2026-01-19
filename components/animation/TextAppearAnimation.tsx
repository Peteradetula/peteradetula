'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {
  cloneElement,
  createElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedTextProps {
  children: ReactNode
  animationOptions?: Partial<gsap.TweenVars>
}

const TextAppearAnimation: FC<AnimatedTextProps> = ({ children, animationOptions = {} }) => {
  const elementRef = useRef<HTMLElement | null>(null)
  const titleTextRef = useRef<SplitType | null>(null)
  const wordSplitRefs = useRef<SplitType[]>([])
  const hasAnimatedRef = useRef(false)
  const animationOptionsRef = useRef(animationOptions)

  useEffect(() => {
    animationOptionsRef.current = animationOptions
  }, [animationOptions])

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element) return
      if (hasAnimatedRef.current) return

      const setupSplitType = () => {
        titleTextRef.current?.revert()
        wordSplitRefs.current.forEach((split) => split.revert())
        wordSplitRefs.current = []

        const titleText = new SplitType(element, { types: 'lines', lineClass: 'line' })
        titleTextRef.current = titleText

        const lines = titleText.lines ?? []
        if (!lines.length) return null

        const wordsSplits = lines.map(
          (line) => new SplitType(line as unknown as HTMLElement, { types: 'words', wordClass: 'word' }),
        )
        wordSplitRefs.current = wordsSplits

        const allWords = wordsSplits.flatMap((split) => split.words || [])
        return allWords.length ? (allWords as HTMLElement[]) : null
      }

      const words = setupSplitType()
      if (!words) return

      gsap.set(words, { y: 120, rotation: 21, opacity: 0 })

      const tween = gsap.to(words, {
        y: 0,
        rotation: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 65%',
          end: 'top 30%',
          scrub: false,
          once: true,
          markers: false,
          onEnter: () => {
            hasAnimatedRef.current = true
          },
        },
        ...animationOptionsRef.current,
      })

      ScrollTrigger.refresh()

      return () => {
        tween.kill()
      }
    },
    { scope: elementRef, dependencies: [] },
  )

  useEffect(() => {
    return () => {
      titleTextRef.current?.revert()
      wordSplitRefs.current.forEach((split) => split?.revert())
      hasAnimatedRef.current = false

      const el = elementRef.current
      if (!el) return

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill()
      })
    }
  }, [])

  if (isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      ref: elementRef,
      className: `${(children as ReactElement).props.className ?? ''}`.trim(),
    })
  }

  return createElement('span', { ref: elementRef }, children)
}

export default TextAppearAnimation
