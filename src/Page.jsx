import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className=" w-full h-screen-minus-header overflow-hidden">
        <CarouselMain />
      </div>
    </Layout>
  );
}
