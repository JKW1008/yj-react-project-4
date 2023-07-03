import Logo from "../png/pngwing.com.png";

export default function LogoAsset({ width }) {
  return (
    <div>
      <img className={`${width}`} src={Logo} alt="메인로고" />
    </div>
  );
}
