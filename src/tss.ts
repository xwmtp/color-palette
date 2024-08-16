import {createTss} from "tss-react";

function useContext() {
  return {
    theme: {
      primaryColor: "#32CD32",
      gray: "#1a1a1a",
    },
  };
}

export const {tss} = createTss({useContext});
