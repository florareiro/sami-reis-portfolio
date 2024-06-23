import "./index.css";
import { AppProvider } from "./hooks/AppContext";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
// import ReactGA from "react-ga4";
// import { useEffect } from "react";
// ReactGA.initialize("G-VSNY3ZQ1LE");

function App() {
  // useEffect(() => {
  //   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  // }, []);

  return (
    <AppProvider>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
