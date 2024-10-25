import SectionHeader from "@/components/Sections/SectionHeader"
import Image from "next/image"

interface TextBlockProps {
    heading?: string
    content?: string
    listItems?: string[]
}

export function TextBlock({ heading, content, listItems }: TextBlockProps) {
    return (
        <div className="py-3">
            {heading && <h5 className="font-neuMedium">{heading}</h5>}
            <p className="font-neuBook text-[13px] md:text-[16px]">{content}</p>
            {listItems && (
                <ul className="list-disc pl-16 font-neuBook text-[13px] md:text-[16px] py-2 md:w-1/2">
                    {listItems.map((item, index) => (
                        <li
                            key={index}
                            className={
                                "font-neuMedium text-secondary underline underline-offset-4 cursor-pointer py-1 hover:text-[#444444]"
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default function EditorSetup() {
    return (
        <div className="w-full tracking-wider">
            <SectionHeader heading="💻 My Coding Setup" showButton={false}>
                <div className="w-full">
                    <TextBlock content="I use the  Visual Studio Code code editor with a dark modern theme color, which is the default Visual Studio Code theme. For the icon, I use their material icon extension, and for the font, I use the JetBrains Mono font." />
                    <TextBlock
                        heading="Editor: Visual Studio Code"
                        content="VSCode is my go-to editor for web development. It’s packed with features that make coding enjoyable and productive, from syntax highlighting to built-in Git support."
                    />
                    <TextBlock
                        heading="Extensions I Use:"
                        content=""
                        listItems={[
                            "Prettier - Code Formatter",
                            "ESLint",
                            "GitLens",
                            "Live Server",
                            "Path Intellisense",
                            "VSCode Icons",
                        ]}
                    />
                    <div className="w-full items-center text-center">
                        <div className="mt-10 w-full rounded-xl bg-[#EDF3FF] p-10">
                            <Image
                                src="/img/coding.png"
                                width={772}
                                height={415}
                                alt="Setup Visual Studio Code"
                                className="rounded-lg transition-all duration-300 hover:scale-105"
                            />
                        </div>
                        <p className="py-2 font-neuMedium text-[14px] md:text-[16px]">
                            Preview of VSCode configuration
                        </p>
                    </div>
                </div>
            </SectionHeader>
        </div>
    )
}
