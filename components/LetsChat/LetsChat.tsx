import CTA from '../shared/CTA'
import CtaImageSlider from '../shared/CtaImageSlider'

export default function LetsChat() {
  return (
    <>
      {/* <CTA>
        Let's chat{' '}
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        over
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">a virtual coffee?</i>
      </CTA> */}

      <CTA>
        Let's chat{' '}
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        over
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">a virtual coffee?</i>
      </CTA>
    </>
  )
}
