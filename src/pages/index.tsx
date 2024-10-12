import Hero from "@/views/Home/Hero";
import SectionHeader from "@/components/Sections/SectionHeader";
import { CardProject } from "@/components/Projects/Card";
import BlogItem from "@/components/Blog/Item";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="pt-28 md:pt-32">{children}</div>;
}

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionHeader title="Feature Projects" href="/projects">
        <CardProject />
      </SectionHeader>
      <SectionHeader title="From the blog" href="/blog">
        <BlogItem />
      </SectionHeader>
    </Container>
  );
}
