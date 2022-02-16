import Document, { Html, Head, Main, NextScript } from "next/document";
import { universalEnv } from "../env";

const WindowInjectionProperties = () => {
  const reducer = (html, [name, value]) => html + `window.${name}='${value}';`;
  const properties = Object.entries(universalEnv).reduce(reducer, '');
  return <script dangerouslySetInnerHTML={{ __html: properties }} />;
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <WindowInjectionProperties />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
