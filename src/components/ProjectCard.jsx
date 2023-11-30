import { Link } from 'react-router-dom'
import { ICONS_LIST } from './Icons'
import './ProjectCard.css'



export const ProjectCard = ({id, image, name, description, link, colorClass, languages = []}) => {

  const iconsArray = [...languages]

  return (
    <article className='projectCard_container w-full'>
      <img src={image} className='transition-all shadow-md rounded-lg object-cover object-top w-full h-[220px]' alt=""/>
    <section className='flex flex-col gap-3 justify-between'>
        <div className="flex flex-col gap-2">
            <h3 className='text-lg font-semibold'>{name}</h3>
            <p className='text-gray-500'>{description}</p>
            <div className='py-2'>
              <section className="flex gap-2">
                  {
                      iconsArray.map((item)=>{
                          if (!ICONS_LIST[item]) return
                          return (
                              <div className='mediumIconSize' key={crypto.randomUUID()}>
                                  {ICONS_LIST[item]}
                              </div>
                          )
                      })
                  }
              </section>
            </div>
        </div>
        <footer className='flex gap-4'>
        <a target='_blank' href={link} className={`boton-principal w-fit flex gap-3 items-center justify-center px-5 py-3 rounded-lg font-medium ${colorClass}`} rel="noreferrer">
            Visitar
            <svg stroke={colorClass} fill={colorClass} strokeWidth="0" viewBox="0 0 640 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path></svg>
        </a>
        <Link to={`/${id}`} className={`boton-principal w-fit flex gap-3 items-center justify-center px-5 py-3 rounded-lg bg-[#e1e1dd]`} rel="noreferrer">
            Más Info
        </Link>
        </footer>
    </section>
  </article>
  )
}
