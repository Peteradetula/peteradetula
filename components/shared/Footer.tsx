import footerData from '@/data/footer.json'
import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import FooterProvider from './FooterProvider'
// import teamMembers from '@/data/teamMemberData.json'
// import linkedinLogo from '@/public/images/icons/linkedin.png'
// import twiterDarkLogo from '@/public/images/icons/x-twitter-dark.svg'
// import emailLogo from '@/public/images/icons/email.png'
// import youtubeDarkLogo from '@/public/images/icons/youtube-dark.svg'
// import facebookDarkLogo from '@/public/images/icons/facebook-dark.svg'
// import { LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <FooterProvider>
      <div className="container">
        <div className="relative z-10 flex flex-col flex-wrap justify-center gap-y-10 sm:flex-row sm:justify-between sm:gap-y-16">
          <div className="pr-8 max-lg:basis-full">
            <div className="mb-4 flex items-center justify-between gap-4 sm:mb-8">
              <h5 className="font-satoshi text-sm font-bold uppercase tracking-[3px] text-white">Reach me</h5>

              {/* <ul className="flex gap-5">
                {teamMembers[0].socialLinks.email && (
                  <li>
                    <Link
                      href={teamMembers[0].socialLinks.email}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <MailOutlined
                        className="!inline !text-white dark:text-white"
                        style={{ color: 'white !important', fontSize: 24 }}
                      />
                      <Image src={emailLogo} alt="Twitter" width={24} height={24} className="inline" />
                    </Link>
                  </li>
                )}
                {teamMembers[0].socialLinks.linkedin && (
                  <li>
                    <Link
                      href={teamMembers[0].socialLinks.linkedin}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <LinkedinOutlined
                        className="!inline !text-white dark:text-white"
                        style={{ color: 'white !important', fontSize: 24 }}
                      />
                      <Image src={linkedinLogo} alt="Twitter" width={24} height={24} className="inline" />
                    </Link>
                  </li>
                )}
                {teamMembers[0].socialLinks.twitter && (
                  <li>
                    <Link
                      href={teamMembers[0].socialLinks.twitter}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={twiterDarkLogo} alt="Twitter" width={24} height={24} className="inline" />
                    </Link>
                  </li>
                )}
                {teamMembers[0].socialLinks.facebook && (
                  <li>
                    <Link
                      href={teamMembers[0].socialLinks.facebook}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={facebookDarkLogo} alt="Facebook" width={24} height={24} className="inline" />
                    </Link>
                  </li>
                )}
                {teamMembers[0].socialLinks.youtube && (
                  <li>
                    <Link
                      href={teamMembers[0].socialLinks.youtube}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={youtubeDarkLogo} alt="YouTube" width={24} height={24} className="inline" />
                    </Link>
                  </li>
                )}
              </ul> */}
            </div>
            <p className="mb-5 text-sm text-white">
              Book a quick 15 min meeting where we discuss if my offer <br />
              would work for your case
            </p>
            <div className="group flex max-w-[360px] items-center justify-between gap-4 bg-primary bg-opacity-30 p-4 backdrop-blur-2xl">
              <Image className="h-[55px] w-auto" src={logo} alt="logo" />
              <div>
                <h6 className="font-satoshi text-sm font-bold text-white">Schedule a Free Meeting</h6>
                <p className="text-sm text-white">1 spot left this month</p>
              </div>
              <Link href="https://calendly.com/adetulapeter/30min" target="_blank">
                <figure className="relative h-[55px] w-[55px] cursor-pointer overflow-hidden bg-primary">
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute -translate-x-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                  />
                </figure>
              </Link>
            </div>
          </div>

          {footerData.map((section, index) => (
            <div key={`Id_${index}`}>
              <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
                {section.title}
              </h5>
              <ul>
                {section.links.map(({ href, label }) => (
                  <li className="mb-4" key={href}>
                    <Link
                      href={href}
                      className="block text-white transition-colors duration-300 hover:font-medium hover:text-primary">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <h5 className="footer-text xs:text-5xl absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] text-nowrap text-center font-satoshi text-4xl font-medium tracking-widest sm:text-6xl md:text-[88px] lg:text-[120px] xl:text-[150px] 2xl:text-[170px]">
          PETER ADETULA
        </h5>
      </div>
    </FooterProvider>
  )
}

export default Footer
