import { ICONS_LIST } from "./Icons"

export const SecondaryProjectsCard = ({name, description, languages, link}) => {

    const iconsArray = [...languages]

    return (
    <article className="w-full outline-[#929292] outline outline-[1px] rounded-lg px-5 py-4 flex flex-col gap">
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">{name}</h2>
            <a href={link}></a>
        </div>
        <p className="text-gray-500 text-sm">{description}</p>
        <section className="flex gap-2 mt-3">
            {
                iconsArray.map((item)=>{
                    if (!ICONS_LIST[item]) return
                    return (
                        <div className="smallIconSize" key={crypto.randomUUID()}>
                            {ICONS_LIST[item]}
                        </div>
                    )
                })
            }
        </section>
    </article>
  )
}
