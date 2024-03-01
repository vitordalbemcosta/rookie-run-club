import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return <div>Faq</div>;
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
