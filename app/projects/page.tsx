import LetsChat from '@/components/LetsChat/LetsChat'
import OurProject from '@/components/projectpage/OurProject'
import ProjectHero from '@/components/projectpage/ProjectHero'
import GradientCta from '@/components/shared/GradientCta'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Design Agency Projects',
}

const ProjectPage = () => {
  return (
    <LayoutOne>
      <ProjectHero />
      <OurProject />
      {/* <GradientCta /> */}
      <LetsChat />
    </LayoutOne>
  )
}

export default ProjectPage
