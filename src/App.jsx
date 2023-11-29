import './App.css'
import { NavBar } from './components/NavBar'
import { ProjectCard } from './components/ProjectCard'
import { SecondaryProjectsCard } from './components/SecondaryProjectsCard'
import { PROYECTOS, PROYECTOS_SECUNDARIOS } from './constants/projects'

function App() {

  return (
    <>
      <div className='container py-28 flex flex-col gap-6'>
        <div className=''>
        <h1 className='text-4xl font-semibold text-[#222]'>Hola, soy Matias. <br/>Desarollador <span className='text-4xl font-bold text-[#0D8065]'>FullStack</span>.</h1>
        </div>
        <section className='flex flex-row gap-5'>
          <a target="_blank" href="https://github.com/matibe95" className='boton-principal flex gap-2 items-center justify-center px-3 py-2 bg-[#e1e1dd] rounded-lg' rel="noreferrer">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              Github
          </a>
          <a target="_blank" href="mailto:matibel2005@gmail.com?Subject=Hola%20estoy%20interesado%20hablar%20contigo!" className='boton-principal flex gap-2 items-center justify-center px-3 py-2 bg-[#e1e1dd] rounded-lg' rel="noreferrer">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
              Correo
          </a>
        </section>
        <p className='text-gray-500'>Mi nombre es Matias Bellini, soy un desarrollador full-stack de Uruguay listo para crear experiencias y soluciones a la sociedad.</p>
        <hr className='w-full border-[#929292]'/>
        {/* <NavBar /> */}
        <h2 className='text-2xl font-semibold'>Mis proyectos</h2>
        <section className='flex flex-col gap-10'>
          {
            PROYECTOS.map((item)=>{
              return (
                <ProjectCard
                  key={item.id}
                  description={item.description}
                  image={item.image}
                  name={item.name}
                  link={item.link}
                  colorClass={item.colorClass}
                  languages={item.languages}
                />
              )
            })
          }
        </section>
        <section className='grid grid-cols-2 gap-6'>
          {
            PROYECTOS_SECUNDARIOS.map((item)=>{
              return (
                <SecondaryProjectsCard 
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  link={item.link}
                  languages={item.languages}
                />
              )
            })
          }
        </section>
        <hr className='w-full border-[#929292]'/>
        <h2 className='text-2xl font-semibold'>Mi progreso</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
          <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Febrero 2021</time>
              <h3 className="text-lg font-semibold">Comienzo de mis estudios</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">En el año 2021 comencé mis estudios en el bachillerato informático del liceo IEP. Allí adquirí la lógica computacional y sólidas bases para mi futuro desarrollo, teniendo asignaturas como lógica, metodos discrétos y programación</p>
          </li>
          <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Julio 2021</time>
              <h3 className="text-lg font-semibold">Primer concurso nacional</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A mediados de año, se presentó una oportunidad de participar de un concurso nacional llamado &quot;iHackatic&quot; de la Universidad de Montevideo el cual consistía en desarrollar una solución para un problema planteado en un determinado tiempo. De cientos de equipos que participaron, el equipo al que yo pertenecía quedó en el 2ndo puesto.</p>
          </li>
          <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Agosto 2022</time>
              <h3 className="text-lg font-semibold">Aclamada victoria</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Luego de haber estado a un pequeño paso de ser los ganadores, decidimos volver a participar del mismo certamen con el mismo equipo. Logrando el primer premio y desarrollando la aplicación de beneficios Portones.</p>
          </li>
          
          <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Noviembre 2023</time>
              <h3 className="text-lg font-semibold">Desarrollador graduado</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Tras estudiar 3 años en el bachillerato informático, adquirí conocimientos muy sólidos sobre muchas areas. En el camino tuve asignaturas como Base de datos, Diseño Web, Sistemas Operativo. Además, este ultimo año mi conocimiento sobre documentación aumentó exponencialmente gracias al proyecto final que mi equipo y yo tuvimos que desarrollar: Origins App</p>
          </li>
        </ol>
      </div>
    </>
  )
}

export default App
