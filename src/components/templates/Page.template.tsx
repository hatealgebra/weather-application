import React from "react";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { AppContainer } from "../atoms/block/Block";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import { Content, HeaderStyled } from "./page.template.styled";

function PageTemplate({ children }: PageTemplateProps) {
  const windowSize = useWindowSize();

  return (
    <AppContainer>
      <HeaderStyled>
        <Header
          data-testid="top-panel"
          isTouchDevice={windowSize.width! < 700 ? true : false}
        />
      </HeaderStyled>
      <Content data-testid="app-content">{children}</Content>
      <Footer data-testid="footer" />
    </AppContainer>
  );
}

export interface PageTemplateProps {
  children: React.ReactNode;
}

export default PageTemplate;
