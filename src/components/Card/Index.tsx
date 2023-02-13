import { useTheme } from "styled-components/native";
import { Container, Description, Title, Icon, WrapperIcon } from "./styles";

type Props = {
  percent: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Card({ percent, type = 'PRIMARY' }: Props){
  const { COLORS } = useTheme();

  return (
    <Container type={type}>
      <WrapperIcon>
        <Icon color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK}  />
      </WrapperIcon>
      <Title>{percent}</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}