import React from "react";
import {PaletteColor} from "../colors/PaletteColors.ts";
import {tss} from "../tss.ts";

interface Props {
  paletteColor: PaletteColor;
}

export const ColorBlock: React.FC<Props> = ({paletteColor}) => {
  const {classes} = useStyles();
  return (
    <div className={classes.root} style={{backgroundColor: paletteColor.color}}>
      {paletteColor.name}
    </div>
  );
};

const useStyles = tss.withName("ColorBlock").create({
  root: {
    height: "60vh",
    width: "100%",
    scrollSnapAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
});