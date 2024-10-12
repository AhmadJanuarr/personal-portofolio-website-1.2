import Link from "next/link";

export default function FooterColumn({
  title,
  links,
  url,
}: {
  title: string;
  links: string[];
  url: string[];
}) {
  return (
    <div>
      <h6 className="mb-4 font-neuBold uppercase">{title}</h6>
      <ul>
        {links.map((item, index) => (
          url[index] ? (
            <Link key={index} href={url[index]} passHref target={["/", "/about", "/contact", "/projects", "/uses"].includes(url[index]) ? "_self" : "_blank"}>
              <li className="mb-5 font-neuBook tracking-wider cursor-pointer text-[14px] text-[#444444] hover:underline">
                {item}
              </li>
            </Link>
          ) : (
            <li key={index} className="mb-5 font-neuBook tracking-wider text-[14px] text-[#444444]">
              {item}
            </li>
          )
        ))}
      </ul>
    </div>
  );
}
