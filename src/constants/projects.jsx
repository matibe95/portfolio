import origins from '../assets/origins.png'
import swp from '../assets/swift_points.png'
import queGire from '../assets/quegireapp.png'
import portones from '../assets/portones.jpeg'

export const PROYECTOS = [
    {
        id: crypto.randomUUID(),
        name: 'Origins App',
        description: 'Red social de intercambio cultural.',
        image: origins,
        link: 'https://www.parqueroosvelt.proyectosiep.duckdns.org/',
        colorClass: 'origins',
        languages: ['laravel', 'angular']
    },
    {
        id: crypto.randomUUID(),
        name: 'Swift Points',
        description: 'Herramienta desarrollada para facilitar el cálculo de puntos de función de un software.',
        image: swp,
        link: 'https://puntos-funcion.vercel.app/',
        colorClass: 'swiftpoints',
        languages: ['react']
    },
    {
        id: crypto.randomUUID(),
        name: 'QueGire! App',
        description: 'Web dedicada a resultados de la liga universitaria en todos los deportes',
        image: queGire,
        link: 'https://offside.vercel.app/',
        colorClass: 'quegireapp',
        languages: ['react']
    },
    {
        id: crypto.randomUUID(),
        name: 'Portones App',
        description: 'Aplicación mobile para beneficios del shopping Portones',
        image: portones,
        link: 'https://youtu.be/hpygvFWhXl0',
        colorClass: 'portones',
        languages: ['java']
    }
]

export const PROYECTOS_SECUNDARIOS = [
    {
        id: crypto.randomUUID(),
        name: 'LUD API',
        description: "Extraer info de LUD",
        link: 'https://lud-api.vercel.app',
        languages: ['node']
    },
    {
        id: crypto.randomUUID(),
        name: 'Spellrun',
        description: "Página de mecanografía",
        link: 'https://lud-api.vercel.app',
        languages: ['php', 'javascript', 'java']
    },
]