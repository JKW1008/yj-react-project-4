import { useState } from "react";

export default function LayoutTab({ tabLists, numbers }) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        <div className="w-full">
          {/* 탭 타이틀 */}
          <ul className={`grid ${numbers} py-2 mx-auto gap-3`}>
            {tabLists.map(({ title }, i) => (
              <li
                key={i}
                className="outline outline-1 cursor-pointer outline-neutral-400 flex-auto text-center hover:bg-neutral-100"
              >
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(i + 1);
                  }}
                  className={`px-5 py-4 block text-neutral-400 ${
                    openTab === i + 1
                      ? "shadow-xl outline-black text-black text-bold"
                      : ""
                  }`}
                >
                  {title}
                </div>
              </li>
            ))}
          </ul>
          {/* 클릭시 보여지는 부분 */}
          <div className=" relative flex flex-col w-full my-16 rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                {/* 탭 요소 */}
                {tabLists.map(({ children }, i) => (
                  <div
                    key={i}
                    className={openTab === i + 1 ? "block" : "hidden"}
                  >
                    {children}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
