import { Container } from "..";
import Introduce from "@/views/About/about";
import Heading from "@/components/Layout/Heading";
import Skill from "@/views/About/skill";
import Experience from "@/views/About/experience";
import { AbilityType } from "@/types/ability.type";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/skills");
  const response = await res.json();
  return {
    props: {
      ability: response.data,
    },
  };
}

export default function About({ ability }: { ability: AbilityType[] }) {
  return (
    <Container>
      <Heading heading="About">
        <Introduce />
        <Skill ability={ability} />
        <Experience />
      </Heading>
    </Container>
  );
}
