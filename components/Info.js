import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.svg';

export default function Info() {
  return (
    <div id="info">
      <div id="logo-section">
        <Image src={logo} alt="logo" width={500} />
        <div id="slogan">never ever fried™</div>
      </div>
      <div id="info-content">
        <div id="info-content-detail">
          <div className="line">
            COMING SOON
          </div>
          <div className="line">
            QUICK CRAFT CASUAL DINING
          </div>
          <div className="line">
            PHOENIX, ARIZONA
          </div>
        </div>
        <div>NOW HIRING</div>
        <Link href="#form" id="link">
          <div className="btn">
            Apply Now
          </div>
        </Link>
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

          #info-content {
            padding-top: 50px;
            display: grid;
            gap: 30px;
            justify-items: center;
            font-size: 20px;
          }

          #info-content-detail {
            display: grid;
            justify-items: center;
            gap: 5px;
          }

          #logo-section {
            display: grid;
            gap: 0;
          }

          #slogan {
            justify-self: right;
          }

          .btn:hover {
            transform: scale(1.2);
            opacity: 0.85;
          }
        `}
      </style>
    </div>
  );
}
