import AwardsV2 from '@/components/aboutpage/AwardsV2'
import Team from '@/components/aboutpage/Team'
import LetsChat from '@/components/LetsChat/LetsChat'
import About from '@/components/shared/About'
// import CTA from '@/components/shared/CTA'
// import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import PageHero from '@/components/shared/PageHero'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About - Peter Adetula',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="About"
        title={
          <span>
            Sketches of{' '}
            <span className="inline-block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Me</span>
          </span>
        }
        italicTitle=""
        description="My name is Peter Adetula and as an endorsed Global Talent under Tech Nation in the UK, my mission is simple: design solutions that make an impact worldwide while inspiring the next wave of AI and data enthusiasts to shape the future of work."
      />
      <Video />
      <About />
      <Team />
      <Marquee withBorder={true} />
      <AwardsV2 />
      <LetsChat />
    </LayoutOne>
  )
}

export default AboutPage
