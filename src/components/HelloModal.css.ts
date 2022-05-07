import { style } from "@vanilla-extract/css";

export const root = style({
  position: "absolute",
  inset: "auto 0",
  margin: "48px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const content = style({
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "1024px",
  background: "#fff",
  padding: "24px",
});
