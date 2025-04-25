import { Container } from "./FooterCSS.tsx"

export default function Banner() {
  return (
    <Container>
      <p>&copy; {new Date().getFullYear()} Luciano Menezes</p>
    </Container>
  )
}
