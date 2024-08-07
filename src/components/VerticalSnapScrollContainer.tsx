import React, {PropsWithChildren} from "react";

export const VerticalSnapScrollContainer: React.FC<PropsWithChildren> = ({children}) => {
  return <div className="scroll-container">{children}</div>;
};
