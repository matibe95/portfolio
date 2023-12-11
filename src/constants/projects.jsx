import origins from '../assets/origins.png'
import origins2 from '../assets/origins-2.png'
import origins3 from '../assets/origins-3.png'
import origins4 from '../assets/origins-4.png'
import swp from '../assets/swift_points.png'
import swp2 from '../assets/swift_points-2.png'
import swp3 from '../assets/swift_points-3.png'
import queGire from '../assets/quegireapp.png'
import portones from '../assets/portones.jpeg'

export const PROYECTOS = [
    {
        id: 'origins-app',
        name: 'Origins App',
        description: 'Red social de intercambio cultural.',
        image: origins,
        link: 'https://www.parqueroosvelt.proyectosiep.duckdns.org/',
        colorClass: 'origins',
        languages: ['laravel', 'angular'],
        _extended_description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum impedit odio rerum at optio in nemo ipsum blanditiis culpa nostrum aspernatur et libero quisquam modi, eveniet, provident incidunt! Minima?',
        _extended_images: [origins2, origins3, origins4]
    },
    {
        id: 'swift-points',
        name: 'Swift Points',
        description: 'Herramienta desarrollada para facilitar el cálculo de puntos de función de un software.',
        image: swp,
        link: 'https://puntos-funcion.vercel.app/',
        colorClass: 'swiftpoints',
        languages: ['react'],
        _extended_description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum impedit odio rerum at optio in nemo ipsum blanditiis culpa nostrum aspernatur et libero quisquam modi, eveniet, provident incidunt! Minima?',
        _extended_images: [swp2, swp3]
    },
    {
        id: 'quegire!-app',
        name: 'QueGire! App',
        description: 'Web dedicada a resultados de la liga universitaria en todos los deportes',
        image: queGire,
        link: 'https://offside.vercel.app/',
        colorClass: 'quegireapp',
        languages: ['react'],
        _extended_description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum impedit odio rerum at optio in nemo ipsum blanditiis culpa nostrum aspernatur et libero quisquam modi, eveniet, provident incidunt! Minima?',
    },
    {
        id: 'portones-app',
        name: 'Portones App',
        description: 'Aplicación mobile para beneficios del shopping Portones',
        image: portones,
        link: 'https://youtu.be/hpygvFWhXl0',
        colorClass: 'portones',
        languages: ['java'],
        _extended_description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum impedit odio rerum at optio in nemo ipsum blanditiis culpa nostrum aspernatur et libero quisquam modi, eveniet, provident incidunt! Minima?',
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