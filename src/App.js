import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SalesForceServices from "./components/SalesForceServices";
import DigitalMarketingServices from "./components/DigitalMarketingServices";
import WebDesignServices from "./components/WebDesignServices";
import MobileDesignServices from "./components/MobileDesignServices";
import CloudComputingServices from "./components/CloudComputingServices";
import LowCodeServices from "./components/LowCodeServices";
import BlockChainServices from "./components/BlockChainServices";
import AiServices from "./components/AiServices";
import EcommerceIndustries from "./components/E-commerceIndustries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Industries from "./components/Industries";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/salesforce-service"
              element={<SalesForceServices />}
            />
            <Route
              path="/digital-marketing-service"
              element={<DigitalMarketingServices />}
            />
            <Route
              path="/cloud-computing-service"
              element={<CloudComputingServices />}
            />
            <Route path="/low-code-service" element={<LowCodeServices />} />
            <Route path="/mobile-service" element={<MobileDesignServices />} />

            <Route path="/web-service" element={<WebDesignServices />} />
            <Route
              path="/e-commerce-industry"
              element={<EcommerceIndustries />}
            />
            <Route
              path="/blockchain-service"
              element={<BlockChainServices />}
            />

            <Route path="/ai-service" element={<AiServices />} />
            <Route path="/industries" element={<Industries />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
