import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import SubTitle from "../components/SubTitle";

export default function SignUp() {
  return (
    <Layout>
      <SubTitle firstTitle={"로그인"} secondTitle={"회원가입"} />
      <LayoutContents>
        <table>
          <tbody>
            <tr>
              <td>회원 아이디</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </LayoutContents>
    </Layout>
  );
}
