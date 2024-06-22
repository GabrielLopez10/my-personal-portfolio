'use client'

import Image from 'next/image'
import AnimationContainer from '../utils/AnimationContainer'
import { Button, HoverCard } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'

const Hero = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center justify-between sm:m-20 lg:-mt-5 lg:flex-row">
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="mx-auto mb-3 text-center text-3xl font-bold tracking-tight text-white sm:-mt-20 lg:-mx-20 lg:text-start lg:text-5xl">
          Gabriel Gastón López
        </h1>

        <h2 className="text-1xl lg:text-1xl mx-auto mb-8 flex items-center gap-2 text-gray-200 lg:-mx-20">
          <span className="font-semibold">Full-Stack</span>Developer
        </h2>
      </AnimationContainer>

      <AnimationContainer customClassName="w-[150px] lg:w-[280px] relative mb-6 lg:mb-6 lg:m-20">
        <Image
          alt="Gabriel Lopez"
          height={150}
          width={150}
          src="/me.jpg"
          sizes="30vw"
          priority
          className="ease rounded-[8px] grayscale filter transition hover:grayscale-0"
        />
        <div className="mt-10 flex flex-col-reverse items-center justify-between lg:mx-5 lg:flex-row">
          <a
            href="https://res.cloudinary.com/dfzw74nlk/raw/upload/v1719093648/qhzsdvw0ciqvfh72k9jd.pdf"
            className="group relative inline-block text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverCard shadow="md" openDelay={1000}>
              <HoverCard.Target>
                <Button variant="filled" color="dark" radius="md">
                  Resume{<IconDownload size={15} className="mb-0.5 ml-2" />}
                </Button>
              </HoverCard.Target>
            </HoverCard>
          </a>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default Hero
