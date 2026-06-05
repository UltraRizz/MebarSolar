import React from "react";
import { Link } from "react-router-dom";
import "./AnimatedButton.css";

type AnimatedButtonTheme = "orange" | "dark";

type AnimatedButtonProps = {
  children: React.ReactNode;
  theme?: AnimatedButtonTheme;
  to?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

const AnimatedButtonText = ({ children }: { children: React.ReactNode }) => (
  <span className="mab-button-label">
    {String(children)
      .split("")
      .map((char, index) => (
        <span
          className="mab-button-char"
          style={{ "--char-index": index } as React.CSSProperties}
          key={`${char}-${index}`}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
  </span>
);

const AnimatedButtonContent = ({ children }: { children: React.ReactNode }) => (
  <>
    <span className="mab-button-plus mab-button-plus-left" aria-hidden="true">
      +
    </span>
    <AnimatedButtonText>{children}</AnimatedButtonText>
    <span className="mab-button-plus mab-button-plus-right" aria-hidden="true">
      +
    </span>
  </>
);

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  theme = "orange",
  to,
  type = "button",
  className = "",
  ariaLabel,
  onClick,
}) => {
  const classes = `mab-button mab-button-${theme}${className ? ` ${className}` : ""}`;

  if (to) {
    return (
      <Link
        className={classes}
        to={to}
        aria-label={ariaLabel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        <AnimatedButtonContent>{children}</AnimatedButtonContent>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      <AnimatedButtonContent>{children}</AnimatedButtonContent>
    </button>
  );
};

export default AnimatedButton;
