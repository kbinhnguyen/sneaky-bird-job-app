export default function CustomApp({ Component, pageProps }){
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: 'Open Sans';
          }

          input {
            font-family: 'Open Sans';
            font-size: 16px;
          }

          .btn {
            display: flex;
            border-radius: 10px;
            background: #1A1A1A;
            width: 120px;
            height: 40px;
            color: white;
            align-items: center;
            justify-content: center;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 14px;
            transition: transform 250ms ease-in;
          }

          .btn:disabled {
            background: #CDCDCD;
          }

          a:link {
            text-decoration: none;
          }

          a:visited {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
