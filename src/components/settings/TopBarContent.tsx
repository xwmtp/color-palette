import React from "react";
import {tss} from "../../tss.ts";

interface Props {
  onOpenSettings: () => void;
  className?: string;
}

export const TopBarContent: React.FC<Props> = ({onOpenSettings, className}) => {
  const {classes, cx} = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div />
      <h2 className={cx(classes.title)}>Deep Autumn</h2>
      <button onClick={onOpenSettings}>Open settings</button>
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
      padding: "0 4rem",
      flex: 1,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      height: "100%",
      verticalAlign: "center",
      margin: 0,
      border: "1px solid yellow",
    },
  };
});
