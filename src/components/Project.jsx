import { useParams} from "react-router-dom";
import { PROYECTOS } from "../constants/projects";
import './Project.css'

export const Project = () => {
    const params = useParams();
    const projectId = params.projectId
    const info = PROYECTOS.find(p => p.id === projectId)

    if (!info) return window.location.replace('/')

    const newImages = [...info._extended_images || []]

    return (
        <article className="w-full py-28">
            <div className="project_container">
                <section className="flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-5xl">{info.name}</h2>
                        <p className="">{info._extended_description}</p>
                    </div>
                    <footer>
                        <a target='_blank' href={info.link} className={`boton-principal w-full flex gap-3 items-center justify-center px-5 py-3 rounded-lg font-medium ${info.colorClass}`} rel="noreferrer">
                            Visitar
                            <svg stroke={info.colorClass} fill={info.colorClass} strokeWidth="0" viewBox="0 0 640 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path></svg>
                        </a>
                    </footer>
                </section>
                <aside className="flex flex-col gap-4">
                    <img src={info.image} className="rounded-lg" />
                </aside>
            </div>
                { newImages.length > 0 && (
                    <section className="py-12 flex flex-col gap-4">
                        <h2 className="font-semibold text-xl">Imagenes relacionadas</h2>
                        <div className="flex flex-col gap-12">
                        {
                            newImages.map((img)=>{
                                return (
                                    <img key={crypto.randomUUID()} src={img} className="rounded-lg" />
                                    )
                                })
                        }
                        </div>
                    </section>
                    )
                }
        </article>
    )
}
