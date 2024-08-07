import "./App.css";
import {VerticalSnapScrollContainer} from "./components/VerticalSnapScrollContainer.tsx";
import {ColorBlock} from "./components/ColorBlock.tsx";
import {paletteColors} from "./colors/PaletteColors.tsx";

const App = () => {
  return (
    <VerticalSnapScrollContainer>
      {paletteColors.map((paletteColor, index) => (
        <ColorBlock key={index} paletteColor={paletteColor} />
      ))}
    </VerticalSnapScrollContainer>
  );
};

export default App;
