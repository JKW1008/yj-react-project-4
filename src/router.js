import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./app/NotFound";
import Page from "./Page";
import InformationTicket from "./app/InformationTicket";
import RentNotice from "./app/RentNotice";
import RentalNoticeWrite from "./app/RentalNoticeWrite";
import RentalNoticeDetail from "./app/RentalNoticeDetail";
import SignUp from "./app/SignUp";
import SignIn from "./app/SignIn";
import KakaoConfirom from "./components/socail/KakaoConfirom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Page />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "social/kakao",
        element: <KakaoConfirom />,
      },
      {
        path: "information",
        element: <Root />,
        children: [
          {
            path: "",
            element: <InformationTicket />,
          },
        ],
      },
      {
        path: "rental",
        element: <Root />,
        children: [
          {
            path: "",
            element: <RentNotice />,
          },
          {
            path: "notice-write",
            element: <RentalNoticeWrite />,
          },
          {
            path: "notice-detail/:id",
            element: <RentalNoticeDetail />,
          },
        ],
      },
    ],
  },
]);
export default router;
