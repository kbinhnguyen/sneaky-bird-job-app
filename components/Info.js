import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo_tagline.svg';

export default function Info() {
  return (
    <div id="info">
      <div id="logo-section">
        <Image className="image" src={logo} alt="logo" fill priority={true} />
      </div>
      <div id="info-content">
        <div id="info-content-detail-1">
          <div className="line">
            COMING SOON
          </div>
          <div className="line">
            QUICK CRAFT CASUAL
          </div>
          <div className="line emphasis">
            &quot;OVEN-GRILLED GREATNESS&quot;
          </div>
        </div>
        <div id="info-content-detail-2">
          <div id="info-content-detail-2-more">
            <div className="line">15801 N FRANK LLOYD WRIGHT</div>
            <div className="line">SCOTTSDALE, ARIZONA</div>
          </div>
          <div className="line emphasis">NOW HIRING</div>
          <Link href="#form" id="link">
            <div className="btn">Apply Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
