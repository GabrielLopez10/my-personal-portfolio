import AboutMe from '../content/AboutMe'
import ContactMe from '../content/ContactMe'
import CurrentFavTech from '../content/CurrentFavTech'
import CurrentLearning from '../content/CurrentLearning'
import CurrentTimeLineExp from '../content/CurrentTimeLineExp'
import FavProjects from '../content/FavProjects'
import Hero from '../content/Hero'
import AnimationContainer from '../utils/AnimationContainer'
import { skills } from '../utils/mySkills'
import SectionContainer from '../utils/SectionContainer'
import ShowSkills from '../utils/ShowSkills'

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className="flex w-full flex-col items-start">
        <AboutMe />

        <CurrentTimeLineExp />

        {/* <FavProjects /> */}

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="mb-2 text-start text-2xl font-bold tracking-tight text-white md:text-2xl">
            Skills & Tools
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, frameworks, and tools I&apos;ve worked with, I
            started programming about +2 years ago. I have tried a few programming languages and
            technology stack, both Frontend and Backend.
          </p>

          <p className="text-base text-gray-400">
            Event though the scope of web development is wide, I was very interested and focused on
            Frontend development.
          </p>

          <div className="mt-3 flex flex-col items-start gap-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="text-1xl md:text-1xl mb-5 text-start font-bold tracking-tight text-white">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ContactMe />
      </div>
    </SectionContainer>
  )
}

export default HomeSection
