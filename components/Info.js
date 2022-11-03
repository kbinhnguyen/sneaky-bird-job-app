import Link from 'next/link';
import logo from '../public/images/logo.svg';

export default function Info() {
  return (
    <div id="info">
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
            align-items: center;
            justify-content: center;
            background: #F2DECB;
          }

          #info-content {
            background: red;
            display: grid;
            justify-items: center;
          }

          #info-content-detail {
            display: grid;
            justify-items: center;
          }
        `}
      </style>
    </div>
  );
}
