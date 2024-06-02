'use client'

import { useState } from 'react'
import CardProject from './CardProject'
import AnimationContainer from '../utils/AnimationContainer'
import { type CardProjectProps } from '../../types'

const allProjectsInfo = [
  {
    id: '1',
    title: 'Conexión Educativa',
    des: 'Project made for a programming course',
    category: 'html - javascript - css',
    repo: 'https://github.com/GabrielLopez10/ConexionEducativa',
    link: 'https://gabriellopez10.github.io/ConexionEducativa/'
  },
  {
    id: '2',
    title: 'American British Translator',
    des: 'This is the boilerplate for the American British Translator project.',
    category: 'javascript - css',
    repo: 'https://github.com/GabrielLopez10/FCC-boilerplate-project-american-british-english-translator',
    link: 'https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator'
  },
  {
    id: '3',
    title: 'My First Page',
    des: 'My first project using HTML, CSS and JavaScript.',
    category: 'html - javascript - css',
    repo: 'https://github.com/GabrielLopez10/Ticmas-Academy-CV-Proyecto',
    link: 'https://gabriellopez10.github.io/Ticmas-Academy-CV-Proyecto/'
  }
]

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('')

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project =>
    project.category.includes(projectSearch.toLowerCase())
  )

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>
        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>
          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => {
              setProjectSearch(e.target.value)
            }}
          />
        </div>
      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
    </>
  )
}

export default SearchAllProjects
