import { Container } from "./styles";
import { Text } from 'react-native'
import { Person } from "../../components/Person";
import { Card } from "../../components/Card/Index";

export function Home() {
  return (
    <>
      <Person />
      <Container>
        <Card percent="50%" />
      </Container>
    </>
  )
}