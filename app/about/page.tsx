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
        title="About"
        italicTitle=""
        description="As a product designer, I create intuitive digital experiences that blend form and function, crafting solutions that delight users and solve real-world problems."
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
