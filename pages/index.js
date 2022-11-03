import styles from '../styles/Home.module.css';
import Form from '../components/Form';
import Info from '../components/Info';
import ImagesSlide from '../components/ImagesSlide';

export default function Home() {

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
            grid-template-rows: max-content 100vh;
          }
          #upper-section {
            display: grid;
            grid-template-columns: 1fr max-content;
            height: 750px;
          }
        `}
      </style>
    </div>
  )
}
