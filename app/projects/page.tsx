import LayoutOne from '@/components/shared/LayoutOne'
// import LetsChat from '@/components/LetsChat/LetsChat'
import GradientCta from '@/components/shared/GradientCta'
import OurProject from '@/components/projectpage/OurProject'
import ProjectHero from '@/components/projectpage/ProjectHero'

export const metadata = {
  title: 'Projects - Peter Adetula',
}

const ProjectPage = () => {
  return (
    <LayoutOne>
      <ProjectHero />
      <OurProject />
      <GradientCta />
      {/* <LetsChat /> */}
    </LayoutOne>
  )
}

export default ProjectPage
