import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import fifth from '../public/images/SMPM3453.jpg';
import seventh from '../public/images/SMPM3584-2.jpg';
import fourth from '../public/images/SMPM3626.jpg';
import eighth from '../public/images/SMPM3630.jpg';
import ninth from '../public/images/SMPM3660.jpg';
import second from '../public/images/SMPS2666.jpg';
import sixth from '../public/images/SMPS2723.jpg';
import tenth from '../public/images/SMPS2726.jpg';
import first from '../public/images/SMPM3255.jpg';
import third from '../public/images/SMPM3305-2.jpg';

export default function ImagesSlide() {
  const srcs = useMemo(() => [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth], []);
  const [index, setIndex] = useState(0);
  const imgSrc = useMemo(() => (srcs[index]), [srcs, index]);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevInd) => (prevInd + 1) % 10);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div id="img-wrapper">
      <div id="another-wrapper">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={imgSrc}
            alt=""
            priority={true}
            objectFit="cover"
            fill
          />
        </motion.div>
      </div>
    </div>
  )
}
