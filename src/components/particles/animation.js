import { css, keyframes } from "styled-components";
import themeDefault from "./themeDefault";

export const glow = keyframes`
0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;

export const inlineGlow = css`
  animation: ${glow} 1.5s ease-in-out infinite;
  background: ${themeDefault.color.border};
  color: transparent;
  cursor: progress;
`;
