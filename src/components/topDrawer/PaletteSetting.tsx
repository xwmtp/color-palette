import React from "react";
import {tss} from "../../tss.ts";

interface Props {
  name: string;
}

export const PaletteSetting: React.FC<Props> = ({name}) => {
  const {classes} = useStyles();
  return (
    <div className={classes.root}>
      <span>{name}</span>
    </div>
  );
};

const useStyles = tss.withName("PaletteSetting").create(({theme}) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      background: theme.colors.grayMid,
      padding: "1rem",
      flex: 1,
    },
  };
});
