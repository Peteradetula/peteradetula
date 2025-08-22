import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../../components/animation/RevealWrapper'
import RevealWrapperV2 from '../../components/animation/RevealWrapperV2'
import TextAppearAnimation from '../../components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '../../components/animation/TextAppearAnimation02'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const services: WorkType[] = getMarkDownData('data/servicesV2')

const ServicesV14 = () => {
  return (
    <section className="md:pb-16lg:pb-[88px] overflow-hidden pb-14 xl:pb-[100px]">
      {/* <div className="mb-8 text-center md:mb-16">
        <RevealWrapperV2 className="rv-badge reveal-me mb-3">
          <span className="rv-badge-text">Services</span>
        </RevealWrapperV2>
        <TextAppearAnimation02>
          <h2 className="text-appear mb-3">
            Authentic solutions designed for <br />
            <i className="font-instrument"> maximum impact</i>
          </h2>
        </TextAppearAnimation02>
        <TextAppearAnimation>
          <p className="text-appear mx-auto lg:max-w-[770px]">
            I craft solutions that boost engagement and ROI with targeted campaigns, improving brand visibility through
            psychology of design and social media.
          </p>
        </TextAppearAnimation>
      </div> */}
      <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center lg:items-stretch lg:justify-normal">
            {/* <CircleTextAnimation /> */}
            <h3
              className="mx-auto mt-[34px]"
              // ref={revealRef}
            >
              <span>
                I love tackling business challenges by finding smarter ways to solve problems, creating fresh
                strategies, and experimenting with new ideas. For me, curiosity and exploration are the fuel, and growth
                is the destination.
                <br />
                <br />
                Over the years, I&apos;ve built a reputation for blending creativity with collaboration. I enjoy working
                closely with teams, sharing insights, and sparking innovation together. I believe great design happens
                when people connect, experiment, and aren&apos;t afraid to try something different.
                <br />
                <br />
                Product Design (UX/UI) – Designing digital products that are intuitive, visually appealing, and easy to
                use by blending user experience (UX) and user interface (UI) design.
                <br />
                <br />
                Product Management – Defining product strategy, prioritising features, and aligning teams to deliver
                solutions that meet both user needs and business goals.
                <br />
                <br />
                Service & Interaction Design – Mapping and improving end-to-end user journeys, focusing on how people
                interact with services across multiple touchpoints.
                <br />
                <br />
                UX Engineering – Bridging design and development by creating interactive prototypes, validating ideas
                early, and ensuring smooth handover to engineering teams.
              </span>
            </h3>
          </div>
        </div>
      </section>
      {/* <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-2">
        {services.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]">
            <div>
              <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{service.title}</h5>
              <p className="mb-20 lg:mb-[106px]">{service.description}</p>
            </div>
          </RevealWrapper>
        ))}
      </div> */}
    </section>
  )
}

export default ServicesV14
