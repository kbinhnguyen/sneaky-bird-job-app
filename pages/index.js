import styles from '../styles/Home.module.css';
import Form from '../components/Form';
import Info from '../components/Info';
import ImagesSlide from '../components/ImagesSlide';

export default function Home() {

  return (
    <div>
      <div id="upper-section">
        <Info />
        <ImagesSlide />
      </div>
      <Form />
      <style jsx>
        {`
          #upper-section {
            display: grid;
            grid-template-columns: 1fr max-content;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </div>
  )
}
