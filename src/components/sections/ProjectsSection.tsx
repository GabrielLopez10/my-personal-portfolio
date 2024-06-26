import SearchAllProjects from '../content/SearchAllProjects'
import AnimationContainer from '../utils/AnimationContainer'
import SectionContainer from '../utils/SectionContainer'
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer'

const myGithub = 'https://github.com/GabrielLopez10'

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <div className="flex w-full flex-col gap-6">
        <TitleSectionPageContainer title="Projects" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-400">
            These are most of the project I&apos;ve done since I started programming, some of them
            are personal projects, freelance, work, practice or for other situation. If you want to
            see absolutely all my projects, you can go to my{' '}
            <a
              href={myGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="ease transition-all hover:text-white hover:underline"
            >
              github.com/GabrielLopez10
            </a>
            .
          </p>
        </AnimationContainer>

        <SearchAllProjects />
      </div>
    </SectionContainer>
  )
}

export default ProjectsSection
