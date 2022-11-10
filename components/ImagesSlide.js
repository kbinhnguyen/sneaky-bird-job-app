// import { useState, useEffect, useMemo } from 'react';
// import { motion } from 'framer-motion';
import Image from 'next/image';
import first from '../public/images/SMPM3255.jpg';
import second from '../public/images/SMPS2666.jpg';
import third from '../public/images/SMPM3305-2.jpg';
import fourth from '../public/images/SMPM3626.jpg';
import fifth from '../public/images/SMPM3453.jpg';
import sixth from '../public/images/SMPS2723.jpg';
import seventh from '../public/images/SMPM3584-2.jpg';
import eighth from '../public/images/SMPM3630.jpg';
import ninth from '../public/images/SMPM3660.jpg';
import tenth from '../public/images/SMPS2726.jpg';


export default function ImagesSlide() {
  return (
    <div id="img-wrapper">
      <div id="another-wrapper">
          <Image className="main-img" src={first} alt="" priority={true} fill />
          <Image className="main-img" src={second} alt="" priority={true} fill />
          <Image className="main-img" src={third} alt="" priority={true} fill />
          <Image className="main-img" src={fourth} alt="" priority={true} fill />
          <Image className="main-img" src={fifth} alt="" priority={true} fill />
          <Image className="main-img" src={sixth} alt="" priority={true} fill />
          <Image className="main-img" src={seventh} alt="" priority={true} fill />
          <Image className="main-img" src={eighth} alt="" priority={true} fill />
          <Image className="main-img" src={ninth} alt="" priority={true} fill />
          <Image className="main-img" src={tenth} alt="" priority={true} fill />
      </div>
    </div>
  )
}
