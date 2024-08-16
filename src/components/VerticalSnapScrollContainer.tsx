import React, {PropsWithChildren} from "react";
import {tss} from "../tss.ts";

export const VerticalSnapScrollContainer: React.FC<PropsWithChildren> = ({children}) => {
  const {classes} = useStyles();
  return <div className={classes.root}>{children}</div>;
};

const useStyles = tss.withName("VerticalSnapScrollContainer").create({
  root: {
    height: "100%",
    width: "100vw",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    WebkitOverflowScrolling: "touch",
  },
});