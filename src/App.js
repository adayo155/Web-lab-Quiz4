import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Started from "./pages/Started";
import HomePageDesign from "./pages/HomePageDesign";
import HomePageDesign1 from "./pages/HomePageDesign1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-design1":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-design":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Started />} />
      <Route path="/home-page-design1" element={<HomePageDesign />} />
      <Route path="/home-page-design" element={<HomePageDesign1 />} />
    </Routes>
  );
}
export default App;
