import { ICON_LIST } from "@/data/iconList"

export default function SosialMediaIcon() {
  return (
    <div className="flex space-x-5">
      {ICON_LIST.map(({ id, link, src, name }) => (
        <a href={link} key={id} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={name}
            width={30}
            height={30}
            className="transition-all duration-75 hover:grayscale-0 md:grayscale md:filter"
          />
        </a>
      ))}
    </div>
  )
}
