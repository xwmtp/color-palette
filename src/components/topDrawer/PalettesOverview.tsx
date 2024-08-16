import React from "react";
import {PaletteSetting} from "./PaletteSetting.tsx";
import {tss} from "../../tss.ts";
import {Button} from "../button/button.tsx";

export const PalettesOverview: React.FC = () => {
  const {classes} = useStyles();
  return (
    <div className={classes.root}>
      <PaletteSetting name="Deep autumn" />
      <PaletteSetting name="True autumn" />
      <Button className={classes.add}>
        <span>+</span>
      </Button>
    </div>
  );
};

const useStyles = tss.withName("PalettesOverview").create(() => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      rowGap: "0.2rem",
    },
    add: {
      alignSelf: "flex-start",
    },
  };
});
