import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin: 10% 0;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK
}))``;