import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  
  padding: 24px;
`;

export const TextInfo = styled.Text`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;