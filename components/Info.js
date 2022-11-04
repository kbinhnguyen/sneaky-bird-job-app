import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo_tagline.svg';

export default function Info() {
  return (
    <div id="info">
      <div id="logo-section">
        <Image src={logo} alt="logo" width={500} priority={true} />
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
      <style jsx>
        {`
          #info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            justify-items: center;
            background: #F2DECB;
          }

          @media (max-width: 700px) {
            #info {
              width: 100vw;
              height: max-content;
              padding-top: 60px;
              padding-bottom: 60px;
            }
          }

          #info-content {
            padding-top: 50px;
            display: grid;
            gap: 30px;
            justify-items: center;
            font-size: 20px;
          }

          #info-content-detail-1 {
            display: grid;
            justify-items: center;
          }

          #info-content-detail-2 {
            display: grid;
            justify-items: center;
            gap: 20px;
          }

          #info-content-detail-2-more {
            display: grid;
            justify-items: center;
          }

          #slogan {
            justify-self: right;
          }

          .line {
            font-weight: 600;
          }

          .emphasis {
            color: #D16600;
          }
        `}
      </style>
    </div>
  );
}
