import React from "react";
import { AppContainer } from "../atoms/block/Block";
import Footer from "../organisms/footer/Footer";
import { Content, Header } from "./page.template.styled";

function PageTemplate({ header, children }: PageTemplateProps) {
  return (
    <AppContainer>
      <Header data-testid="top-panel">{header}</Header>
      <Content data-testid="app-content">{children}</Content>
      <Footer data-testid="footer" />
    </AppContainer>
  );
}

export interface PageTemplateProps {
  header: React.ReactElement;
  children: React.ReactNode;
}

export default PageTemplate;
