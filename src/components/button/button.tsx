import React, {PropsWithChildren} from "react";
import {ColorName, tss} from "../../tss.ts";

interface ButtonProps extends PropsWithChildren {
  color?: ColorName;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "white",
  size = "medium",
  onClick,
  className,
}) => {
  const {cx, classes} = useStyles({color, size});

  return (
    <button className={cx(classes.root, classes[size], className)} onClick={onClick}>
      {children}
    </button>
  );
};

const useStyles = tss.withParams<{color: ColorName}>().create(({theme, color}) => ({
  root: {
    borderRadius: "10px",
    cursor: "pointer",
    display: "inline-block",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    border: "none",
    backgroundColor: theme.colors[color],
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      filter: "brightness(90%)",
    },
    "&:click": {
      filter: "brightness(80%)",
    },
  },
  small: {
    padding: "5px 10px",
    fontSize: "12px",
  },
  medium: {
    padding: "0.7rem 1rem",
    fontSize: "14px",
  },
  large: {
    padding: "15px 30px",
    fontSize: "16px",
  },
}));