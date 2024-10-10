import Hero from "@/views/Home/Hero";
import SectionHeader from "../components/Sections/SectionHeader";
import { CardProject } from "../components/Projects/Card";
import BlogItem from "../components/Blog/Item";

export default function Home() {
  return (
    <div className="pt-28 md:pt-32 ">
      <Hero />
      <SectionHeader title="Feature Projects" href="/projects" >
        <CardProject />
      </SectionHeader>
      <SectionHeader title="From the blog" href="/blog">
        <BlogItem />
      </SectionHeader>
    </div >
  );
}
