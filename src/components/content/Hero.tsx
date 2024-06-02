import Image from 'next/image'
import AnimationContainer from '../utils/AnimationContainer'

const Hero = () => {
  return (
    <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center lg:-mt-5 sm:m-20'>
      <AnimationContainer customClassName='flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8'>
        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:-mx-20 sm:-mt-20'>
          Gabriel Gastón López
        </h1>

        <h2 className='flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:-mx-20'>
          <span className='font-semibold'>Full-Stack</span>Developer
        </h2>
      </AnimationContainer>

      <AnimationContainer customClassName='w-[150px] lg:w-[280px] relative mb-6 lg:mb-6 lg:m-20'>
        <Image
          alt='Gabriel Lopez'
          height={150}
          width={150}
          src='/me.jpg'
          sizes='30vw'
          priority
          className='rounded-[8px] filter grayscale hover:grayscale-0 transition ease'
        />
        <div className='flex justify-between flex-col-reverse lg:flex-row items-center mt-10 lg:ms-5'>
          <a
            href='https://media.licdn.com/dms/document/media/D4D2DAQEqHzqfFiMzrg/profile-treasury-document-pdf-analyzed/0/1716855663581?e=1718236800&v=beta&t=0-9SJkazjJ6Gm6hMZFfa6tj5QjvKgNvp4-and4jalfc'
            className='relative inline-block text-lg group'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
              <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
              <span className='relative'>Resume</span>
            </span>
            <span
              className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'
            ></span>
          </a>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default Hero
