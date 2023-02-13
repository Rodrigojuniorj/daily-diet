import { Person } from "../../components/Person";
import { Card } from "../../components/Card/Index";

import { Container, TextInfo } from "./styles";

export function Home() {
  return (
    <>
      <Person />
      <Container>
        <Card percent="50,98%" />
        <TextInfo>Refeições</TextInfo>
      </Container>
    </>
  )
}