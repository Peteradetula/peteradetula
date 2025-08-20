'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CompanyLogosMarquee from '../../_unused/homepage-02/CompanyLogosMarquee'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
  page?: string
}

const About = ({ marquee = false, page = 'about' }: AboutProps) => {
  const { revealRef } = useReveal()

  if (marquee) {
    return (
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
        <div className="container">
          <RevealWrapper>
            <h3 className="pb-10 sm:pb-20" ref={revealRef}>
              I provide customized and authentic solutions for enhancing your existing or building a brand-new digital
              userbase from the ground up.
            </h3>
          </RevealWrapper>
          <RevealWrapper>
            <CircleTextAnimation />
          </RevealWrapper>

          <div className="flex flex-auto flex-col items-center justify-between gap-x-8 gap-y-14 pt-14 sm:pt-[70px] md:flex-row md:pt-[100px] xl:gap-x-28">
            <RevealWrapper className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark"></div>
              <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-backgroundBody to-transparent dark:from-dark"></div>
              <CompanyLogosMarquee />
            </RevealWrapper>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center lg:items-stretch lg:justify-normal">
          <CircleTextAnimation />
          <h3 className="mx-auto mt-[34px]" ref={revealRef}>
            {/* We specialize in designing cutting-edge web <br className="hidden sm:block" />
            experiences that flawlessly blend creativity with <br />
            innovative technology.
            <br />
            <br />
            We provide customized solutions for <br className="hidden sm:block" />
            enhancing your existing site or building <br className="hidden sm:block" />a brand-new digital platform from
            the ground up */}
            {page === 'about' ? (
              <span>
                As an endorsed Global Talent under Tech Nation in the UK, my mission is simple: design solutions that
                make an impact worldwide while inspiring the next wave of AI and data enthusiasts to shape the future of
                work.
                <br />
                <br />
                I love tackling business challenges by finding smarter ways to solve problems, creating fresh
                strategies, and experimenting with new ideas. For me, curiosity and exploration are the fuel, and growth
                is the destination.
                <br />
                <br />
                Over the years, I&apos;ve built a reputation for blending creativity with collaboration. I enjoy working
                closely with teams, sharing insights, and sparking innovation together. I believe great design happens
                when people connect, experiment, and aren&apos;t afraid to try something different.
              </span>
            ) : (
              <span>
                I&apos;m an experienced product designer and UK&apos;s Global Talent (Tier 1) with a strong interest in
                consumer psychology and how good design drives business performance.
                <br />
                <br />
                Over the past few years, I&apos;ve worked on projects across a range of sectors, creating solutions that
                balance user needs with business goals.
              </span>
            )}
          </h3>
        </div>
      </div>
    </section>
  )
}
export default About
