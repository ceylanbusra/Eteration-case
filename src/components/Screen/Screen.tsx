import React from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

// import { useThemeContext } from "../../contexts/ThemeProvider/hooks";
import { ScreenProps } from "./screenProps.interface";
import { useThemeContext } from "../../context/ThemeProvider/hooks";

const Container = styled(View)<{
  backgroundColor: string;
  padding: number;
}>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { backgroundColor: any }) =>
    props.backgroundColor};
  padding: ${(props: { padding: number }) => moderateScale(props.padding)}px;
`;

export default function Screen({
  children,
  padding = "m",
  margin = "m",
}: ScreenProps): JSX.Element {
  const theme = useThemeContext();

  return (
    <Container
      padding={padding ? theme.padding[padding] : 0}
      backgroundColor={theme.colors.background}
    >
      {children}
    </Container>
  );
}
