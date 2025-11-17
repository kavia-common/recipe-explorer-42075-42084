import React from "react";

// PUBLIC_INTERFACE
export default function TagPill({ text, variant = "default" }) {
  /** Simple tag pill used for cuisine and diet labels */
  const className =
    "tag" + (variant === "secondary" ? " secondary" : "");
  return <span className={className}>{text}</span>;
}
