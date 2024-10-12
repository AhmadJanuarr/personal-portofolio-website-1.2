import { Container } from "..";
import Introduce from "@/views/About/about";
import Heading from "@/components/Layout/Heading";
import Skill from "@/views/About/skill";

export default function About() {
  return (
    <Container>
      <Heading heading="About">
        <Introduce />
        <Skill />
      </Heading>
    </Container>
  );
}
