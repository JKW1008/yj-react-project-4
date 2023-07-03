import NaverBlog from "../png/blog.png";

export default function NaverBlogAsset() {
  return (
    <div>
      <img
        src={NaverBlog}
        alt="Naver Blog Logo"
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
