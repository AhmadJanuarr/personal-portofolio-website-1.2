import { Container } from ".."
import Heading from "@/components/Layout/Heading"
import ContactUs from "@/views/Contact/ContactUs"

export default function Contact() {
    return (
        <Container>
            <Heading heading="Contact">
                <ContactUs />
            </Heading>
        </Container>
    )
}
