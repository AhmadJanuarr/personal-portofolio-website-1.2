import Image from "next/image"
import SosialMediaIcon from "@/components/Icon"

function TextContent({ children }: { children: React.ReactNode }) {
    return <p className="text-[14px] md:text-[16px]">{children}</p>
}

function ProfileImage({
    src,
    alt,
    caption,
}: {
    src: string
    alt: string
    caption: string
}) {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            <Image
                src={src}
                width={858}
                height={466}
                alt={alt}
                className="rounded-lg"
            />
            <p className="font-neuBook text-[12px] tracking-wider md:text-[14px]">
                {caption}
            </p>
        </div>
    )
}

export default function Introduce() {
    return (
        <div className="flex w-full flex-col gap-4 font-neuBook tracking-wider">
            <TextContent>
                👋 Hello! I&apos;m Ahmad Januar Amriyansah, but feel free to
                call me Ahmad. I&apos;m a fresh graduate with a Bachelor&apos;s
                degree in Informatics from{" "}
                <span className="text-secondary">
                    Universitas Teknokrat Indonesia
                </span>
                , and I&apos;m currently based in Lampung Tengah. 🚀
            </TextContent>

            <TextContent>
                I’ve honed my skills in JavaScript and web development, with a
                deep passion for creating responsive, interactive websites. My
                goal? To grow as a Full Stack Developer and dive into the latest
                web technologies, bringing innovative ideas to life. 🚀
            </TextContent>

            <ProfileImage
                src="/img/about.png"
                alt="My Picture"
                caption="doing a photo shoot in a photo studio wearing a graduation gown on December 21, 2023"
            />

            <TextContent>
                Armed with both practical experience and a thirst for learning,
                I’m ready to dive into real-world projects, collaborate with
                talented teams, and help bring innovative digital ideas to life.
                💻💡 Feel free to check out my socials and projects—let’s
                connect and create something awesome! 🎉
            </TextContent>

            <div className="pt-5">
                <h5 className="font-neuMedium">Let’s connect!</h5>
                <TextContent>
                    👇 Feel free to reach out to me at{" "}
                    <a
                        href="mailto:ahmadjanuaramri@gmail.com"
                        className="text-secondary hover:underline"
                    >
                        ahmadjanuaramri@gmail.com
                    </a>{" "}
                    or find me on social media and let’s make something great
                    happen! 🎉
                </TextContent>
                <div className="pt-5">
                    <SosialMediaIcon />
                </div>
            </div>
        </div>
    )
}
