import ServicesV14 from '@/_unused/homepage-16/ServicesV14'
import LetsChat from '@/components/LetsChat/LetsChat'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Services - Peter Adetula',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Services"
        title="Services "
        italicTitle=""
        scale
        description="Explore my innovative and cutting-edge solutions designed to captivate and engage your users effortlessly"
        spacing="max-md:pt-44 max-sm:pb-10 max-md:pb-16 md:py-44 lg:py-[200px] relative overflow-hidden"
      />
      <ServicesV14 />
      <Process />
      <LetsChat />
    </LayoutOne>
  )
}

export default ServicesPage
