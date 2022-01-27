import {
  Home,
  Detail,
  Login,
  ForgotPassword,
  SignUp,
  Calling,
  VideoCalling,
  WebCalling,
  OnBoarding,
  Verify,
  RegisterProfile,
  DetailProfile,
  DetailNews,
  DetailClinic,
  ListClinic,
  ListHotline,
  Notification,
  ListNew,
} from "../screens";

const screens = [
  {
    name: "Home",
    component: Home,
    title: "Home screen",
    primary: true,
  },
  {
    name: "Detail",
    component: Detail,
    title: "Detail screen",
  },
  {
    name: "Calling",
    component: Calling,
    title: "Calling screen",
  },
  {
    name: "VideoCalling",
    component: VideoCalling,
    title: "Video Calling screen",
  },
  {
    name: "WebCalling",
    component: WebCalling,
    title: "Web Calling screen",
  },
  {
    name: "Login",
    component: Login,
    title: "Login screen",
  },
  {
    name: "Verify",
    component: Verify,
    title: "Verify screen",
  },
  {
    name: "RegisterProfile",
    component: RegisterProfile,
    title: "Register Profile screen",
  },
  {
    name: "ForgotPassword",
    component: ForgotPassword,
    title: "Forgot password screen",
  },
  {
    name: "SignUp",
    component: SignUp,
    title: "Sign un screen",
  },
  {
    name: "OnBoarding",
    component: OnBoarding,
    title: "Onboard screen",
  },
  {
    name: "DetailProfile",
    component: DetailProfile,
    title: "Detail profile screen",
  },
  {
    name: "DetailNews",
    component: DetailNews,
    title: "Detail news screen",
  },
  {
    name: "DetailClinic",
    component: DetailClinic,
    title: "Detail clinic screen",
  },
  {
    name: "ListClinic",
    component: ListClinic,
    title: "List Hospital screen",
  },
  {
    name: "ListHotline",
    component: ListHotline,
    title: "List hotline screen",
  },
  {
    name: "Notification",
    component: Notification,
    title: "Notification screen",
  },
  {
    name: "ListNew",
    component: ListNew,
    title: "List News screen",
  },
];

export default screens;
