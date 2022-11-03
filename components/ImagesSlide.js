import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import first from '../public/images/SMPM3453.jpg';
import second from '../public/images/SMPM3584-2.jpg';
import third from '../public/images/SMPM3626.jpg';
import fourth from '../public/images/SMPM3630.jpg';
import fifth from '../public/images/SMPM3660.jpg';
import sixth from '../public/images/SMPS2666.jpg';
import seventh from '../public/images/SMPS2723.jpg';
import eighth from '../public/images/SMPS2726.jpg';

export default function ImagesSlide() {
  const srcs = useMemo(() => [first, second, third, fourth, fifth, sixth, seventh, eighth], []);
  const [index, setIndex] = useState(0);
  const imgSrc = useMemo(() => (srcs[index]), [srcs, index]);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevInd) => (prevInd + 1) % 8)
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div id="img-wrapper" className="wrapper">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1.5 }}
      >
        <Image className="image"
          src={imgSrc}
          alt=""
          width={500}
          priority={true}
        />
      </motion.div>

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
          }
        `}
      </style>
    </div>
  )
}
