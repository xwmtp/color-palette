export interface PaletteColor {
  color: string;
  name?: string;
}

export const paletteColors: PaletteColor[] = [
  {name: "brown", color: "#682308"},
  {name: "purple", color: "#6a1c6a"},
  {name: "grey", color: "#959595"},
  {name: "pink", color: "#ffa3ca"},
  {name: "green", color: "#418641"},
  {name: "orange", color: "#ff852c"},
  {name: "blue", color: "#145eea"},
  {name: "red", color: "#ff2929"},
];

export interface Palette {
  name: string;
  colors: PaletteColor[];
}
