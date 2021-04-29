import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="no-fouc">
        <Head />
        <body>
            <script> </script>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;