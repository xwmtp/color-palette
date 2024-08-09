import "./App.css";
import {VerticalSnapScrollContainer} from "./components/VerticalSnapScrollContainer.tsx";
import {ColorBlock} from "./components/ColorBlock.tsx";
import {paletteColors} from "./colors/PaletteColors.ts";
import {TopBar} from "./components/TopBar.tsx";

const App = () => {
  return (
    <VerticalSnapScrollContainer>
      <TopBar />
      {paletteColors.map((paletteColor, index) => (
        <ColorBlock key={index} paletteColor={paletteColor} />
      ))}
    </VerticalSnapScrollContainer>
  );
};

export default App;
