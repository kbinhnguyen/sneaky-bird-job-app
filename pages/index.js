import { useEffect } from 'react';
import Form from '../components/Form.js';
import Info from '../components/Info.js';
import ImagesSlide from '../components/ImagesSlide.js';

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
    </div>
  )
}
