import { Container, Description, Title, Icon } from "./styles";

type Props = {
  percent: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Card({ percent, type = 'SECONDARY' }: Props){
  return (
    <Container type={type}>
      <Icon />
      <Title>{percent}</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}