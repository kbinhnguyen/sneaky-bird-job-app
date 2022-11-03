import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
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
  // const srcs = useMemo(() => [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth], []);
  // const [index, setIndex] = useState(0);
  // const imgSrc = useMemo(() => (srcs[index]), [srcs, index]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevInd) => (prevInd + 1) % 10)
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div id="img-wrapper" className="wrapper">
      <motion.div
        key={index}
        animate={{ x: 100, opacity: 1 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 }
        }}
      >
        <Image className="image"
          src={srcs[index]}
          alt=""
          width={500}
          priority={true}
          key={index}
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
