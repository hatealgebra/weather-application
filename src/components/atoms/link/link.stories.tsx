import React from "react";
import Link from "./Link";

export const UnderlineLink = () => <Link href="#">Link</Link>;

export const ButtonLink = () => (
  <Link href="#" isButton>
    Button Link
  </Link>
);

export default {
  component: Link,
  title: "Atoms/Link",
};
