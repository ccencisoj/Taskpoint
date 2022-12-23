import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id='portal' className='portal'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}