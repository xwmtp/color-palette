import React, {useState} from "react";

export const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`top-bar ${isOpen ? "top-bar-open" : "close-settings"}`}
      onAnimationEnd={() => console.log("end")}
    >
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

      <NewComponent
        onOpenPress={() => {
          setIsOpen((prev) => !prev);
        }}
      />

      {/*<div className={"divv"}>*/}
      {/*  <span className="span">hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*  <span>hai</span>*/}
      {/*</div>*/}
    </div>
  );
};

const NewComponent: React.FC<{onOpenPress: () => void}> = ({onOpenPress}) => {
  return (
    <div id="top-bar-content">
      <div />
      <h2 className="title">Deep Autumn</h2>
      <button onClick={onOpenPress}>Open settings</button>
    </div>
  );
};
