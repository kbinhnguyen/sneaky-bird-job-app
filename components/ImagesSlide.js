import { useState, useEffect } from 'react';
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

const srcs = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth];

export default function ImagesSlide() {
  const [imgSrc, setImgSrc] = useState(first);

  useEffect(() => {
    const interval = setTimeout(() => {
      const index = srcs.indexOf(imgSrc);
      if (index < 9) {
        setImgSrc(srcs[index + 1]);
      } else {
        setImgSrc(first);
      }
    }, 3000);
  }, [imgSrc]);

  return (
    <div id="img-wrapper" className="wrapper">
      <Image className="image"
        placeholder="blur"
        src={imgSrc}
        alt="saucy-fried-chicken"
        width={500}
        priority={true}
      />
      <style jsx>
        {`
          #img-wrapper {
            width: max-content;
            height: max-content;
            position: relative;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  )
}
