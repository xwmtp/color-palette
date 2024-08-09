import React from "react";
import {PaletteColor} from "../colors/PaletteColors.ts";

interface Props {
  paletteColor: PaletteColor;
}

export const ColorBlock: React.FC<Props> = ({paletteColor}) => {
  return (
    <div className="color-block" style={{backgroundColor: paletteColor.color}}>
      {paletteColor.name}
    </div>
  );
};
