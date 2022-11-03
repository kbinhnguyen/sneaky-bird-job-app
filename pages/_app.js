export default function CustomApp({ Component, pageProps }){
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: 'Open Sans';
          }
          .btn {
            display: flex;
            border-radius: 10px;
            background: #1A1A1A;
            width: 110px;
            height: 40px;
            color: white;
            align-items: center;
            justify-content: center;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
}
