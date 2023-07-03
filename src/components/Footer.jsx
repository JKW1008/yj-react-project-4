import ButtonSlide from "./ButtonSlide";
import LogoAsset from "./asset/LogoAsset";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" w-full h-footer-height flex justify-center pt-8 px-2 ">
      <div className="w-full px-layout-padding ">
        <div className=" grid grid-cols-5 h-full">
          {/* 1 */}
          <div className=" w-full space-y-2">
            <p>개인정보 처리방침</p>
            <p>이용약관</p>
            <p>이메일무단수집거부</p>
          </div>
          {/* 2 */}
          <div className=" w-full space-y-2">
            <p>로그인</p>
            <p>회원가입</p>
            <p>오시는 길</p>
          </div>
          {/* 3 */}
          <div className=" w-full space-y-2">
            <div>
              <LogoAsset width={"w-24"} />
            </div>
            <p>우)41585 대구광역시 북구 호암로 15</p>
            <p>T. 053-666-6000 F. 054-666-6019</p>
          </div>
          {/* 4 */}
          <div className=" col-span-2 w-full flex flex-col items-start space-y-2 relative">
            {/* 4-1 */}
            <div className=" w-full flex space-x-2 items-center">
              <select
                size={"sm"}
                className="border border-neutral-300 px-2 text-sm rounded-md py-1 w-[185px]"
              >
                <option>관련사이트</option>
                <option>한국어</option>
                <option>English</option>
              </select>
              <div>
                <ButtonSlide text={"정부포털 부정부패 신고"} />
              </div>
            </div>
            {/* 4-2 */}
            <div>
              <h2 className="w-full">
                대구오페라하우스는 공직자윤리법 제3조의2에 따른 공직유관단체로서
                부정청탁 및 금품 등 수수의 금지에 관한 법률(청탁금지법) 적용대상
                기관임을 알립니다.
              </h2>
              <h2 className=" text-neutral-400">
                Copyright ⓒ 2020 Daegu Opera House. All Rights Reserved. Design
                by KOWEB.
              </h2>
            </div>
            {/* 4-3 */}
            <div className="w-full absolute bottom-0 flex justify-end items-center space-x-4">
              <p className=" text-neutral-300 text-lg">
                OPERA THEATRE REPRESENTING KOREA
              </p>
              <div className="w-16 h-16 bg-neutral-800 text-white flex justify-center items-center">
                <AiOutlineArrowUp size={"20"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
