import styled from "styled-components";

const Caption = styled.span.attrs((props) => ({
  className: props.className + " small",
}))`
  text-transform: capitalize;
  font-weight: 500;
  color: #797d89;
`;

export default Caption;
