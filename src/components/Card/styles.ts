import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type CardTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: CardTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;

  min-height: 102px;
  max-height: 102px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  
  border-radius: 8px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const WrapperIcon = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme}) => ({
  size: 24,
  weight: "bold",
}))`
`;