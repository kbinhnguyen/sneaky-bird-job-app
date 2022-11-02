import Image from 'next/image';
import firstImg from '../public/images/SMPM3453.jpg';

export default function ImagesSlide() {
  return (
    <div classname="wrapper">
      <Image classname="image" src={firstImg} alt="saucy-fried-chicken" />
      <style jsx>
        {`
          wrapper {
            position: fixed;
          }

          image {
            object-fit: cover;
          }
        `}
      </style>
    </div>
  )
}
