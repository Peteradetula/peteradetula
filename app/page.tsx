import Hero from '@/components/homepage-01/Hero'
import Portfolio from '@/components/homepage-01/Portfolio'
import Testimonial from '@/components/homepage-01/Testimonial'
import LetsChat from '@/components/LetsChat/LetsChat'
import About from '@/components/shared/About'
import ClientsV3 from '@/components/shared/ClientsV3'
import Community from '@/components/shared/Community'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import ServicesV8 from '@/components/shared/ServicesV8'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Peter Adetula',
}

const Home = () => {
  return (
    <LayoutOne>
      <Hero />
      <Video />
      <About />
      <Portfolio />
      <ClientsV3 />
      <ServicesV8 />
      <Community />
      <FAQ />
      <Testimonial />
      <LetsChat />
    </LayoutOne>
  )
}

export default Home
