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
    link: 'https://gabriellopez10.github.io/ConexionEducativa/',
  },
  {
    id: '2',
    title: 'American British Translator',
    des: 'This is the boilerplate for the American British Translator project.',
    category: 'javascript - css',
    repo: 'https://github.com/GabrielLopez10/FCC-boilerplate-project-american-british-english-translator',
    link: 'https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator',
  },
  {
    id: '3',
    title: 'My First Page',
    des: 'My first project using HTML, CSS and JavaScript.',
    category: 'html - javascript - css',
    repo: 'https://github.com/GabrielLopez10/Ticmas-Academy-CV-Proyecto',
    link: 'https://gabriellopez10.github.io/Ticmas-Academy-CV-Proyecto/',
  },
]

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('')

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  )

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8 lg:-mx-10">
        <div className="relative mx-auto pt-2 text-gray-400">
          <input
            className="h-10 rounded-lg border-2 border-gray-300 bg-black  px-5 pr-16 text-sm text-white focus:outline-none group-hover:border-gray-400 lg:mx-9 lg:w-full"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => {
              setProjectSearch(e.target.value)
            }}
          />
          <button
            title="Search"
            type="submit"
            className="absolute right-0 top-0 mr-4 mt-5 lg:-mx-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-gray-500"
              fill="none"
              viewBox="0 0 56.966 56.966"
              stroke="currentColor"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </AnimationContainer>

      <article className="mx-auto flex w-full flex-wrap content-center items-center justify-center gap-6">
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
