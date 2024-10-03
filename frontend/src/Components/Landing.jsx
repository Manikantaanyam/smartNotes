import { Outlet, useNavigate } from "react-router-dom";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Works from "./Works";
import { useRecoilValue } from "recoil";
import { TokenAtom } from "../Store/Atoms/NoteIdAtom";

const Landing = () => {
  const navigate = useNavigate();
  const token = useRecoilValue(TokenAtom);
  if (token) {
    navigate("/dashboard/");
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Hero />
      <Features />
      <Works />
      <Footer />
    </div>
  );
};
export default Landing;
