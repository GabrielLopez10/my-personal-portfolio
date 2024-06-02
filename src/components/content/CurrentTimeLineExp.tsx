'use client'

import { Timeline, TimelineEvent } from './TimeLineExp'

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          Freelance | Mar. 2022 - Currently
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <ul className='list-disc ms-3'>
            <li>
              Collaborate with designers to implement UI/UX designs and ensure a
              seamless user experience.
            </li>
            <li>
              Assist in building and maintaining backend services and APIs using
              Node.js, Express, and MongoDB.
            </li>
            <li>
              Stay up-to-date with industry trends and best practices in web
              development and software engineering.
            </li>
            <li>Personal and training courses projects.</li>
          </ul>
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          <a
            href='https://www.sudamericana1120.com.ar/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white hover:underline transition-all ease'
          >
            Broadcast Technician | AM 1120 Sudamericana | Jan. 2010 - Present
          </a>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <ul className='list-disc ms-3'>
            <li>Technical Support (Server and PC Maintenance).</li>
            <li>Radio DJ, Production and Audio Editing.</li>
          </ul>
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  )
}

export default CurrentTimeLineExp
