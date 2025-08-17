import LetsChat from '@/components/LetsChat/LetsChat'
import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import PasswordProtection from '@/components/shared/PasswordProtection'

export async function generateStaticParams() {
  const projects: ProjectType[] = getMarkDownData('data/design-agency')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const project = getMarkDownContent('data/design-agency/', slug)
  const postprojects = project.data
  return {
    title: `${postprojects?.title} - Projects - Peter Adetula`,
  }
}

const ProjectDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const project = getMarkDownContent('data/design-agency/', slug)
  const postprojects = project.data

  // Password protect the 2-shelly-ai page
  if (slug === '2-shelly-ai') {
    return (
      <LayoutOne>
        <PasswordProtection>
          <ProjectDetailsHero
            badgeTitle="Project Case Study"
            title={postprojects?.title}
            description={postprojects?.description}
            scale
          />
          <ProjectContent project={project} />
          <LetsChat />
        </PasswordProtection>
      </LayoutOne>
    )
  }

  return (
    <LayoutOne>
      <div className="individual-project-page">
        <ProjectDetailsHero
          badgeTitle="Project Case Study"
          title={postprojects?.title}
          description={postprojects?.description}
          scale
        />
        <ProjectContent project={project} />
        <LetsChat />
      </div>
    </LayoutOne>
  )
}

export default ProjectDetails
