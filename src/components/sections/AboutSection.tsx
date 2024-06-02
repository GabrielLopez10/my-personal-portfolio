import CurrentTimeLineExp from '../content/CurrentTimeLineExp'
import AnimationContainer from '../utils/AnimationContainer'
import SectionContainer from '../utils/SectionContainer'
import ShowSkills from '../utils/ShowSkills'
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer'
import ProcessWork from '../content/ProcessWork'
import { skills } from '../utils/mySkills'

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className='w-full flex flex-col gap-6'>
        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <p className='text-base text-gray-400'>
            I am a passionate dev with 1 year of work experience in
            JavaScript/TypeScript and love learning new technologies since I
            discovered programming, I am currently learning the way to be a
            DevOps specialist.
          </p>

          <p className='text-base text-gray-400'>
            I also use in web, mobile and desktop development Next.js, Angular,
            Ionic and Electron, to add I also have experience working in Backend
            with Node.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>
            Skills & Tools
          </h2>

          <p className='text-base text-gray-400'>
            A look at all the programming languages, frameworks, and tools
            I&apos;ve worked with, I started programming about +2 years ago. I
            have tried a few programming languages and technology stack, both
            Frontend and Backend.
          </p>

          <p className='text-base text-gray-400'>
            Event though the scope of web development is wide, I was very
            interested and focused on Frontend development.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>
                  {title}
                </h3>

                <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ProcessWork />

        <AnimationContainer customClassName='w-full flex flex-col gap-5'>
          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>
            Interests & Goals
          </h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with other languages like Go or
            Python. I also want to know how to make a video game with Unity or
            Unreal Engine.
          </p>

          <p className='text-base text-gray-400'>
            For now I&apos;m learning how to make applications with real time
            communication such as a chat using Socket.IO, I&apos;m also starting
            to learn the way to be Devops using Docker, Kubernetes, AWS or
            others.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming
            such as 3D design with Blender.
          </p>
        </AnimationContainer>
      </div>
    </SectionContainer>
  )
}

export default AboutSection
