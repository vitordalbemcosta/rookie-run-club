import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div>
        <h1>Hellow World!</h1>
        <p>Cookie run club website</p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
