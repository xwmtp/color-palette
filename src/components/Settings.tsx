import React from "react";
import {addPalette} from "../db/db.ts";

export const TopBar: React.FC = () => {
  return (
    <div className={"top-bar"}>
      {/*<button*/}
      {/*  onClick={async () => {*/}
      {/*    await addPalette({*/}
      {/*      name: "Test deep auttumn",*/}
      {/*      colors: [{name: "ochre", color: "#ffc300"}],*/}
      {/*    });*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Add palette*/}
      {/*</button>*/}

      <NewComponent />

      <button
        onClick={async () => {
          await addPalette({
            name: "Open settings",
            colors: [{name: "ochre", color: "#ffc300"}],
          });
        }}
      >
        Open settings
      </button>
    </div>
  );
};

const NewComponent: React.FC<{}> = () => {
  return (
    <div id="top-bar-content">
      <span className="title">Deep Autumn</span>
    </div>
  );
};
