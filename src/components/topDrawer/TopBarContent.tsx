import React from "react";
import {tss} from "../../tss.ts";
import {Button} from "../button/button.tsx";

interface Props {
  onOpenSettings: () => void;
}

export const TopBarContent: React.FC<Props> = ({onOpenSettings}) => {
  const {classes} = useStyles();

  return (
    <div className={classes.root}>
      <div />
      <h2 className={classes.title}>Deep Autumn</h2>
      <Button size="small" onClick={onOpenSettings}>
        O
      </Button>
    </div>
  );
};

const useStyles = tss.withName("TopBarContent").create(() => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      padding: "0 40px",
      flex: 1,
    },
    title: {
      margin: 0,
      border: "1px solid yellow",
    },
  };
});
