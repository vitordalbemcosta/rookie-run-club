import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const FaqPage: React.FC<PageProps> = () => {
  return <div>Faq</div>;
};

export default FaqPage;

export const Head: HeadFC = () => <title>FAQ</title>;
