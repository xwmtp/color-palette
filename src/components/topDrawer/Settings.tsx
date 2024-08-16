import React from "react";
import {tss} from "../../tss.ts";
import {PalettesOverview} from "./PalettesOverview.tsx";
import {Button} from "../button/button.tsx";

interface Props {
  onCloseSettings: () => void;
}

export const Settings: React.FC<Props> = ({onCloseSettings}) => {
  const {classes} = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.close} size="small" onClick={onCloseSettings}>
        x
      </Button>
      <h3>Palettes</h3>
      <PalettesOverview />
    </div>
  );
};

const useStyles = tss.withName("TopBarContent").create(() => {
  return {
    root: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    close: {
      alignSelf: "flex-end",
    },
  };
});
