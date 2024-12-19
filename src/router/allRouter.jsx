import { Profile, TeamPage, FeedbackPage, Settings } from "../pages";
import AlmostThere from "../pages/onBoard/almostThere";
import ForgotPassword from "../pages/onBoard/forgetPassword";
import LogIn from "../pages/onBoard/logIn";
import OnBoard from "../pages/onBoard/onBoard";
import { ResetPage } from "../pages/onBoard/resetPage";
import SignUp from "../pages/onBoard/signUp";
import { PATH } from "./path";
import { Navigate } from "react-router-dom";
export const pathSlicer = (path, sliceStart = 1) => path?.slice(sliceStart);

const privateRoutes = [
  {
    path: "/",
    element: <Navigate to={PATH.Profile} />,
  },
  {
    path: PATH.Profile,
    element: <Profile />,
  },
  {
    path: PATH.TeamPage,
    element: <TeamPage />,
  },
  {
    path: PATH.Feedback,
    element: <FeedbackPage />,
  },
  {
    path: PATH.Setting,
    element: <Settings />,
  },
];

const publicRoutes = [
  {
    path: PATH.onBoard,
    element: <SignUp />,
  },
  {
    path: PATH.ResetPage,
    element: <ResetPage />,
  },
  {
    path: PATH.SignUp,
    element: <AlmostThere />,
  },
  {
    path: PATH.Login,
    element: <LogIn />,
  },
  {
    path: PATH.ForgotPassword,
    element: <ForgotPassword />,
  },
];

export { privateRoutes, publicRoutes };
