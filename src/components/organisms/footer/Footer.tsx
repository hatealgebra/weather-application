import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: auto;
  padding: 50px 0px;
  text-align: center;
  .footer {
    &__social {
      margin-top: 15px;
      svg {
        vertical-align: middle;
        font-size: 20px;
        margin: 0 10px;
        color: ${({ theme }) => theme.color.labelGrey};
      }
    }
  }
  p {
    margin: auto;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Made with &#129505; & &#9749; by Paul. </p>
      <div className="footer__social">
        <a href="https://github.com/hatealgebra" className="footer__anchor">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pavel-vondra-603012201/"
          className="footer__anchor"
        >
          <SiLinkedin />
        </a>
        <a href="mailto:Pavelvondra66@gmail.com" className="footer__anchor">
          <SiGmail />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
