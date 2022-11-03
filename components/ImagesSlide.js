import Image from 'next/image';
import firstImg from '../public/images/SMPM3453.jpg';

export default function ImagesSlide() {
  return (
    <div className="wrapper">
      <Image className="image"
        src={firstImg}
        alt="saucy-fried-chicken"
        width={500}
        priority={true}
      />
      <style jsx>
        {`
          .wrapper {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  )
}
