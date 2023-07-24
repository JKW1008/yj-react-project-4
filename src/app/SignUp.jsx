import ButtonSlide from "../components/ButtonSlide";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import SubTitle from "../components/SubTitle";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, handleSubmit } = useForm();

  return (
    <Layout>
      <SubTitle firstTitle={"로그인"} secondTitle={"회원가입"} />
      <LayoutContents>
        <table className="table_top w-full">
          <tbody>
            <tr>
              <td className="table_td border-l-0">회원아이디</td>
              <td className="table_td border-l-0">
                <input
                  {...register("username")}
                  type="text"
                  className="border border-neutral-300 p-2"
                />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">비밀번호</td>
              <td className="table_td border-l-0">
                <input
                  {...register("password1")}
                  type="password"
                  className="border border-neutral-300 p-2"
                />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">비밀번호확인</td>
              <td className="table_td border-l-0">
                <input
                  {...register("password2")}
                  type="password"
                  className="border border-neutral-300 p-2"
                />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">이름</td>
              <td className="table_td border-l-0">
                <input
                  {...register("name")}
                  type="text"
                  className="border border-neutral-300 p-2"
                />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">휴대전화</td>
              <td className="table_td border-l-0">
                <input
                  {...register("mobile")}
                  type="text"
                  className="border border-neutral-300 p-2"
                />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">이메일</td>
              <td className="table_td border-l-0">
                <input
                  {...register("email")}
                  type="email"
                  className="border border-neutral-300 p-2"
                />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">주소</td>
              <td className="table_td border-l-0">
                <div className="space-x-2">
                  <input
                    {...register("zipcode")}
                    disabled
                    type="text"
                    className="p-2 border border-neutral-300 bg-neutral-50"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 rounded text-sm border border-neutral-300 hover:shadow-sm"
                  >
                    우편번호 검색
                  </button>
                </div>
                <input
                  {...register("address1")}
                  disabled
                  type="text"
                  className="w-full p-2 border border-neutral-300 bg-neutral-50"
                />
                <input
                  {...register("address2")}
                  type="text"
                  className="w-full border border-neutral-300 p-2"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full flex justify-center  py-8 space-x-2">
          <ButtonSlide text={"회원가입"} />
          <ButtonSlide text={"메인으로"} />
        </div>
      </LayoutContents>
    </Layout>
  );
}
