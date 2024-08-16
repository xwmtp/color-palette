import {createTss} from "tss-react";

export const colors = {
  primaryColor: "#32CD32",
  grayDark: "#1a1a1a",
  grayMid: "#2f2f2f",
  white: "#eeeff1",
};

export type ColorName = keyof typeof colors;

export const theme = {colors};

function useContext() {
  return {theme};
}

export const {tss} = createTss({useContext});
