import { Link } from "react-router-dom";
import ButtonSlide from "../components/ButtonSlide";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import SubTitle from "../components/SubTitle";

export default function RentalNoticeDetail() {
  return (
    <Layout>
      <SubTitle firstTitle={"관리자모드"} secondTitle={"공지사항 상세보기"} />
      <LayoutContents title={"공지사항 상세보기"}>
        <div className="py-16 space-y-8">
          <table className="table_top w-full">
            <tbody>
              <tr>
                <td className="table_td border-l-0" colSpan={4}>
                  리액트 너무 재미있다.
                </td>
              </tr>
              <tr>
                <td width={"10%"} className="table_td border-l-0">
                  작성일
                </td>
                <td width={"40%"} className="table_td border-l-0">
                  1분전
                </td>
                <td width={"10%"} className="table_td border-l-0">
                  조회수
                </td>
                <td width={"40%"} className="table_td border-l-0">
                  0
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="table_td border-l-0">
                  내용
                </td>
              </tr>
              <tr>
                <td className="table_td border-l-0">이전 글</td>
                <td className="table_td border-l-0" colSpan={3}>
                  이전 글 제목
                </td>
              </tr>
              <tr>
                <td className="table_td border-l-0">다음 글</td>
                <td className="table_td border-l-0" colSpan={3}>
                  다음 글 제목
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-center">
            <Link to={"/rental"}>
              <ButtonSlide text={"목록"} />
            </Link>
          </div>
        </div>
      </LayoutContents>
    </Layout>
  );
}
