import Instagram from "../png/pngegg.png";

export default function InstagramAsset() {
  return (
    <div>
      <img
        src={Instagram}
        alt="Instagram Logo"
        className=" 
        w-6 
        h-6  
        group-hover:w-10 
        group-hover:h-10 
        transition-all 
        duration-200"
      />
    </div>
  );
}
