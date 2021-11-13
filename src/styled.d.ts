// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      deepDark: string;
      dark: string;
      lightDark: string;
    };
    white: {
      lightWhite: string;
      darkWhite: string;
    };
  }
}
