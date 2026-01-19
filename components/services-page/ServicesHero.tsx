<section className="relative z-50 overflow-hidden pt-28 pb-14 md:pt-[155px] md:pb-16 lg:pt-[177px] lg:pb-[88px] xl:pb-[100px]">
  <HeroGradientAnimation />

  <div className="container">
    <div className="reveal-me text-center">
      {badgeTitle && (
        <div className="rv-badge">
          <span className="rv-badge-text">{badgeTitle}</span>
        </div>
      )}

      <h1 className="mb-3">{title}</h1>
      <p className="mx-auto max-w-[780px]">{description}</p>
    </div>

    <ul className="reveal-me mt-10 flex list-none justify-center md:mt-14">
      <li className="block w-full text-center md:inline-block md:w-auto">
        <Link
          target="_blank"
          href="https://calendly.com/adetulapeter/30min"
          className="rv-button rv-button-primary block md:inline-block"
        >
          <div className="rv-button-top">
            <span>Schedule a Free Consultation</span>
          </div>
          <div className="rv-button-bottom">
            <span className="text-nowrap">Schedule a Free Consultation</span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</section>
