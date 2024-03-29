import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { SetStateAction } from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import Button from "../../atoms/button/Button";
import AboutApp from "../../particles/AboutApp";

const ModalContainerStyled = styled.div<{ isOpen: boolean; ref: any }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: white;
  color: black !important;
  padding: 50px 5% 20px 5%;
  box-shadow: ${({ theme }) => theme.shadow.border_shadow};
  button {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  p {
    color: black;
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    width: 80%;
    height: 80%;
    margin: auto;
    max-width: 700px;
    max-height: 800px;
  }
`;

const AboutModal = ({ isOpen, setIsOpenModal }: AboutModalProps) => {
  const modalRef = React.useRef(null);
  React.useEffect(() => {
    if (modalRef.current) {
      if (isOpen) {
        disableBodyScroll(modalRef.current);
      } else {
        enableBodyScroll(modalRef.current);
      }
    }
  }, [isOpen, modalRef]);
  return (
    <ModalContainerStyled
      data-testid="about-modal"
      isOpen={isOpen}
      ref={modalRef}
    >
      <Button
        onClick={() => setIsOpenModal(false)}
        appearance="tertiary"
        containsIcon
        size="small"
      >
        <GrClose title="about-modal__close-button" />
      </Button>
      <AboutApp />
    </ModalContainerStyled>
  );
};

interface AboutModalProps {
  isOpen: boolean;
  setIsOpenModal: React.Dispatch<SetStateAction<boolean>>;
}

export default AboutModal;
