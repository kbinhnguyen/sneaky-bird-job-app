import { useEffect } from 'react';
import Form from '../components/Form';
import Info from '../components/Info';
import ImagesSlide from '../components/ImagesSlide';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const elementId = anchor.getAttribute('href').slice(1);
        const element = document.querySelector(elementId);
        element.scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <div id="main">
      <div id="upper-section">
        <Info />
        <ImagesSlide />
      </div>
      <Form />
      <style jsx>
        {`
          #main {
            display: grid;
            grid-template-rows: repeat(2, max-content);
          }
          #upper-section {
            position: relative;
            width: 100vw;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 100vh;
          }
          @media(max-width: 700px) {
            #upper-section {
              width: 100vw;
              grid-template-rows: repeat(2, max-content);
            }
          }
        `}
      </style>
    </div>
  )
}
