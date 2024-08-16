import {VerticalSnapScrollContainer} from "./components/VerticalSnapScrollContainer.tsx";
import {ColorBlock} from "./components/ColorBlock.tsx";
import {paletteColors} from "./colors/PaletteColors.ts";
import {Settings} from "./components/settings/Settings.tsx";
import {GlobalStyles} from "tss-react";

const App = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          "body, html, #root": {
            margin: 0,
            height: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
          },
        }}
      />
      <VerticalSnapScrollContainer>
        <Settings />
        {paletteColors.map((paletteColor, index) => (
          <ColorBlock key={index} paletteColor={paletteColor} />
        ))}
      </VerticalSnapScrollContainer>
    </>
  );
};

export default App;
