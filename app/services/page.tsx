import ServicesV14 from '@/app/services/ServicesPage'
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
        title={
          <span>
            Design &{' '}
            <span className="inline-block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Beyond</span>
          </span>
        }
        italicTitle=""
        scale
        description="I help teams and businesses craft meaningful digital experiences by combining design, strategy, and technology. My experiences cover the full spectrum, from shaping ideas into user-friendly products to ensuring seamless delivery."
        spacing="max-md:pt-44 max-sm:pb-10 max-md:pb-16 md:py-44 lg:py-[200px] relative overflow-hidden"
      />
      <ServicesV14 />
      <Process />
      <LetsChat />
    </LayoutOne>
  )
}

export default ServicesPage
