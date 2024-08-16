import React, {useState} from "react";
import {tss} from "../../tss.ts";
import {TopBarContent} from "./TopBarContent.tsx";
import {Settings} from "./Settings.tsx";

export const TopDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {classes, cx} = useStyles({isOpen});

  return (
    <div
      className={cx(classes.root, {[classes.open]: isOpen})}
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

      {isOpen ? (
        <Settings onCloseSettings={() => setIsOpen(false)} />
      ) : (
        <TopBarContent onOpenSettings={() => setIsOpen(true)} />
      )}
    </div>
  );
};

const useStyles = tss
  .withName("TopBar") // Helps debug
  .create(({theme}) => ({
    root: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      margin: "auto",
      backgroundColor: theme.colors.grayDark,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      height: "60px",
      width: "80vw",
      borderBottomLeftRadius: "40px",
      borderBottomRightRadius: "40px",
      transition:
        "height 1s, width 1s, border-bottom-left-radius 1s, border-bottom-right-radius 1s",
    },
    open: {
      height: "100vh",
      width: "100vw",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    },
  }));
