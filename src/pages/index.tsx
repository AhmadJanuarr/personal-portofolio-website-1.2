import Hero from "@/views/Home/Hero";
import FeatureProject from "@/views/Home/FeatureProject";
import FeatureBlog from "@/views/Home/FeatureBlog";

export default function Home() {
  return (
    <div className="pt-28 md:pt-32 ">
      <Hero />
      <FeatureProject />
      <FeatureBlog />
    </div>
  );
}
