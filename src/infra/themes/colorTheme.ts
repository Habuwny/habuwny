export interface ColorTheme {
  ui: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quintuple: string;
    sixfold: string;
    sevenfold: string;
    eightfold: string;
    ninefold: string;
  };
  bg: { primary: string; secondary: string };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}
export interface ColorCommonTheme {
  ui: {
    black: string;
    white: string;
    disabled: string;
    error: string;
    success: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quintuple: string;
    sixfold: string;
    disabled: string;
    inverse: string;
    error: string;
    success: string;
  };
}
