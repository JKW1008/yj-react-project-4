import { Link } from "react-router-dom";
import FacebookAsset from "./asset/FacebookAsset";
import InstagramAsset from "./asset/InstagramAsset";
import KakaoAsset from "./asset/KakaoAsset";
import NaverBlogAsset from "./asset/NaverBlogAsset";

export default function LeftSide() {
  const SNS_ITEMS = [
    { icon: <FacebookAsset />, link: "https://facebook.com" },
    { icon: <NaverBlogAsset />, link: "https://naver.com" },
    { icon: <InstagramAsset />, link: "https://instagram.com" },
    { icon: <KakaoAsset />, link: "https://kakao.com" },
  ];

  return (
    <div
      className="
    flex 
    flex-col 
    w-full
     h-full
    space-y-6 
    items-center 
    py-16
    
    "
    >
      {SNS_ITEMS.map(({ icon, link }) => (
        <Link to={link} key={link}>
          <div
            className="
            w-10
            h-10
          border border-neutral-300 
          rounded-full 
          flex
          justify-center 
          items-center group 
          overflow-hidden 
          space-y-8"
          >
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
