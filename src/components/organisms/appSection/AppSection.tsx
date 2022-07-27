import React from "react";

import { Section } from "../../atoms/block/Block";

function AppSection({
  isLoading,
  boldHeading,
  heading,
  children,
  noPadding,
  className,
}: AppSectionProps) {
  // Weather types
  return (
    <>
      <Section noPadding={noPadding} className={className}>
        <h2>
          <span>{boldHeading}</span>
          {heading}
        </h2>
        {children}
      </Section>
    </>
  );
}

export interface AppSectionProps {
  className?: string;
  boldHeading: string;
  heading: string;
  isLoading?: boolean;
  children: React.ReactNode;
  noPadding?: boolean;
}

export default AppSection;
