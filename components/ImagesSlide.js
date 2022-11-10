import { useState } from 'react';
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
  const [loaded, setLoaded] = useState(false);

  return (
    <div id="img-wrapper">
      <div id="another-wrapper">
          <Image className="main-img" id="last-img" priority={true} src={loaded ? tenth : first} alt="" fill />
          <Image className="main-img" src={loaded ? ninth : first} priority={true} alt="" fill />
          <Image className="main-img" src={loaded ? eighth : first} priority={true} alt="" fill />
          <Image className="main-img" src={loaded ? seventh : first} priority={true} alt="" fill />
          <Image className="main-img" src={loaded ? sixth : first} priority={true} alt="" fill />
          <Image className="main-img" src={loaded ? fifth : first} priority={true} alt="" fill />
          <Image className="main-img" src={loaded ? fourth : first} priority={true} alt="" fill />
          <Image className="main-img" src={loaded ? third : first} priority={true} alt="" fill />
          <Image className="main-img" src={loaded ? second : first} priority={true} alt="" fill />
          <Image className="main-img" id="first-img" src={first} onLoadingComplete={() => { setLoaded(true); }} alt="" priority={true} fill />
      </div>
    </div>
  );
}
