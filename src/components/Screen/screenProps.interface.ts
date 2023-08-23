import { ThemeOptionsData } from "../../context/ThemeProvider/themeOptionsData";


export interface ScreenProps {
  children: React.ReactElement;
  padding?: keyof typeof ThemeOptionsData.padding | 0;
  margin?: keyof typeof ThemeOptionsData.margin | 0;
}