import Image from "next/image";
import SosialMediaIcon from "../../components/Icon";

export default function Introduce() {
  return (
    <div className="flex w-full flex-col gap-4 font-neuBook tracking-wider">
      <p className="text-[14px] md:text-[16px]">
        👋 Hello! I&apos;m Ahmad Januar Amriyansah, but feel free to call me
        Ahmad. I&apos;m a fresh graduate with a Bachelor&apos;s degree in
        Informatics from{" "}
        <span className="text-secondary">Universitas Teknokrat Indonesia</span>,
        and I&apos;m currently based in Lampung Tengah. 🚀
      </p>
      <p className="text-[14px] md:text-[16px]">
        I’ve honed my skills in JavaScript and web development, with a deep
        passion for creating responsive, interactive websites. My goal? To grow
        as a Full Stack Developer and dive into the latest web technologies,
        bringing innovative ideas to life. 🚀
      </p>
      <div className="flex flex-col items-center gap-3  text-center ">
        <Image
          src="/img/about.png"
          width={858}
          height={466}
          alt="My Picture"
          className="rounded-lg"
        />
        <p className="font-neuBook text-[12px] tracking-wider md:text-[14px]">
          doing a photo shoot in a photo studio wearing a graduation gown on
          December 21, 2023
        </p>
      </div>
      <p className="text-[14px] md:text-[16px]">
        Armed with both practical experience and a thirst for learning, I’m
        ready to dive into real-world projects, collaborate with talented teams,
        and help bring innovative digital ideas to life. 💻💡 Feel free to check
        out my socials and projects—let’s connect and create something awesome!
        🎉
      </p>
      <div className="pt-5">
        <h5 className="font-neuMedium ">Let’s connect!</h5>
        <p className="py-4">
          👇Feel free to reach out to me at 
          <a href="#" className="text-secondary hover:underline">
            ahmadjanuaramri@gmail.com
          </a>{" "}
          or find me on social media and let’s make something great happen! 🎉
        </p>
        <SosialMediaIcon />
      </div>
    </div>
  );
}
