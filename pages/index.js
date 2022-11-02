import styles from '../styles/Home.module.css';
import Form from '../components/Form';
import Info from '../components/Info';
import ImagesSlide from '../components/ImagesSlide';

export default function Home() {
  return (
    <div>
      <div>
        <Info />
        <ImagesSlide />
      </div>
      <Form />
    </div>
  )
}
