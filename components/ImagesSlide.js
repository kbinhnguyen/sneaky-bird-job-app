import Image from 'next/image';
import first from '../public/images/SMPM3453.jpg';
import second from '../public/images/SMPM3305-2.jpg';
import third from '../public/images/SMPM3255.jpg';
import fourth from '../public/images/SMPM3584-2.jpg';
import fifth from '../public/images/SMPM3626.jpg';
import sixth from '../public/images/SMPM3630.jpg';
import seventh from '../public/images/SMPM3660.jpg';
import eighth from '../public/images/SMPS2666.jpg';
import ninth from '../public/images/SMPS2723.jpg';
import tenth from '../public/images/SMPS2726.jpg';


export default function ImagesSlide() {
  return (
    <div id="img-wrapper" className="wrapper">
      <Image className="image"
        src={first}
        alt="saucy-fried-chicken"
        width={500}
        priority={true}
      />
      <Image className="image"
        src={first}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={first}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={fourth}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={fifth}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={sixth}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={seventh}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={eighth}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={ninth}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <Image className="image"
        src={tenth}
        alt="saucy-fried-chicken"
        width={500}
        // priority={true}
      />
      <style jsx>
        {`
          #img-wrapper {
            width: max-content;
            height: max-content;
            position: relative;
            margin: 0 auto;
          }

          #img-wrapper img {
            position: absolute;
            left: 0;
            -webkit-transition: opacity 1s ease-in-out;
            -moz-transition: opacity 1s ease-in-out;
            -o-transition: opacity 1s ease-in-out;
            transition: opacity 1s ease-in-out;
          }

          #img-wrapper img {
            animation-name: imgAlternate;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-duration: 20s;
          }

          #img-wrapper img:nth-of-type(1) {
            animation-delay: 18s;
          }

          #img-wrapper img:nth-of-type(2) {
            animation-delay: 16s;
          }

          #img-wrapper img:nth-of-type(3) {
            animation-delay: 14s;
          }

          #img-wrapper img:nth-of-type(4) {
            animation-delay: 12s;
          }

          #img-wrapper img:nth-of-type(5) {
            animation-delay: 10s;
          }

          #img-wrapper img:nth-of-type(6) {
            animation-delay: 8s;
          }

          #img-wrapper img:nth-of-type(7) {
            animation-delay: 6s;
          }

          #img-wrapper img:nth-of-type(8) {
            animation-delay: 4s;
          }

          #img-wrapper img:nth-of-type(9) {
            animation-delay: 2s;
          }

          #img-wrapper img:nth-of-type(10) {
            animation-delay: 0s;
          }

          @keyframes imgAlternate {
            0% {
              opacity: 1;
            }
            17% {
              opacity: 1;
            }
            25% {
              opacity: 0;
            }
            92% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  )
}
