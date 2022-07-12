import styled from "styled-components";
import PVlogo from "../../../assets/pv-logo.png";

export const Logo = styled.img.attrs((props) => ({
  src: PVlogo,
}))`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
