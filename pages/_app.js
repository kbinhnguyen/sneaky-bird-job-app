export default function CustomApp({ Component, pageProps }){
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html {
            overflow-x: hidden;
          }
          body {
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            display: grid;
            width: 100%;
            overflow-x: hidden;
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
            transition: transform 1s linear;
            cursor: pointer;
            position: relative;
            top: 0;
          }

          .btn:hover {
            top: -3px;
          }

          .btn:disabled {
            top: 0;
            background: #CDCDCD;
            cursor: not-allowed;
          }

          a:link {
            text-decoration: none;
          }

          a:visited {
            text-decoration: none;
          }

          #main {
            width: 100%;
            display: grid;
            grid-template-rows: repeat(2, max-content);
            grid-template-columns: 1fr;
          }

          #upper-section {
            position: relative;
            width: 100vw;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, max-content);
            height: 100vh;
          }

          #img-wrapper {
            width: 100%;
            height: 100%;
            grid-column: 2 / 3;
            background: #F2DECB;
            position: absolute;
          }

          #another-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
          }

          #info {
            height: 100%;
            width: 100%;
            grid-column: 1 / 2;
            position: absolute;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            align-items: start;
            justify-content: center;
            justify-items: center;
            background: #F2DECB;
          }

          #logo-section {
            position: relative;
            width: 100%;
            height: 100%;
            grid-row: 1 / 2;
            display: grid;
            align-items: end;
          }

          .image {
            width: 100%;
          }

          #info-content {
            width: 100%;
            display: grid;
            gap: 30px;
            align-self: top;
            justify-items: center;
            font-size: 20px;
            grid-row: 2 / 3;
          }

          #info-content-detail-1 {
            width: 100%;
            display: grid;
            justify-items: center;
          }

          #info-content-detail-2 {
            width: 100%;
            display: grid;
            justify-items: center;
            gap: 20px;
          }

          #info-content-detail-2-more {
            display: grid;
            justify-items: center;
          }

          #slogan {
            justify-self: right;
          }

          .line {
            font-weight: 600;
          }

          .emphasis {
            color: #D16600;
          }

          @media(max-width: 900px) {
            #upper-section {
              width: 100vw;
              height: max-content;
              grid-template-columns: 1fr;
              grid-template-rows: max-content;
              display: grid;
            }

            #img-wrapper {
              background: #F2DECB;
              grid-column: 1 / 2;
              grid-row: 2 / 3;
              height: 1000px;
              position: relative;
            }

            #info {
              width: 100vw;
              height: 500px;
              padding-top: 60px;
              padding-bottom: 60px;
              position: relative;
              grid-row: 1 / 2;
            }
          }
        `}
      </style>
    </>
  );
}
