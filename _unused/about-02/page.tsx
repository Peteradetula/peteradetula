import AboutHero from '@/_unused/aboutpage-02/AboutHero'
import TeamGallery from '@/_unused/aboutpage-02/TeamGallery'
import Clients from '@/_unused/homepage-03/Clients'
import ServicesV3 from '@/_unused/homepage-03/ServicesV3'
import HeroAbout from '@/_unused/homepage-07/HeroAbout'
import CtaV2 from '@/components/shared/CtaV2'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import SkewMarquee from '@/components/shared/SkewMarquee'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About-02',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <AboutHero />
      <Video />
      <HeroAbout spacingTop="pt-10 sm:pt-16 md:pt-[100px] mb-10 lg:mb-20" />
      <SkewMarquee />
      <ServicesV3 />
      <TeamGallery />
      <Clients />
      <FaqV2 />
      <CtaV2 />
    </LayoutOne>
  )
}

export default AboutPage
