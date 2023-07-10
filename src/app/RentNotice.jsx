import AdminBoardButton from "../components/AdminBoardButton";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import LayoutTab from "../components/LayoutTab";
import SubTitle from "../components/SubTitle";
import TableRentalNotice from "../components/TableRentalNotice";

export default function RentNotice() {
  return (
    <Layout>
      <SubTitle firstTitle={"공간 대관안내"} secondTitle={"공지사항"} />
      <LayoutContents title={"공지사항"}>
        <div className="space-y-6">
          {/* 검색 바 */}
          {/* 게시판 */}
          <TableRentalNotice />
          {/* 글쓰기 버튼 */}
          <AdminBoardButton href={"/rental/notice-write"} />
        </div>
      </LayoutContents>
    </Layout>
  );
}
