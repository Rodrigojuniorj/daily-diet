import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0px 24px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const PersonImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_1};
`