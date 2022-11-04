export default function CustomApp({ Component, pageProps }){
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: 'Open Sans', sans-serif;
          }

          input {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
          }

          .btn {
            display: flex;
            border: 0;
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
            cursor: pointer;
          }

          .btn:disabled {
            background: #CDCDCD;
            cursor: not-allowed;
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
