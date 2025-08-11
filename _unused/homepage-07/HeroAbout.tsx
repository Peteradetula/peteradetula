'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../../components/animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        Rivor Agency: Shaping the Future of Digital Innovation. We are dedicated to empowering blockchain pioneers and
        transforming the realm of digital ownership for today and beyond. images
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        I&apos;m an experienced product designer and UK&apos;s Global Talent (Tier 1) with a strong interest in consumer
        psychology and how good design drives business performance. Over the past few years, I&apos;ve worked on
        projects across a range of sectors, creating solutions that balance user needs with business goals. I&apos;m
        passionate about building products that are usable, inclusive, enjoyable, and genuinely useful.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
