import { Routes, Route } from "react-router-dom"
import PrototypeThree from './prototypeOne/PrototypeThree';
import PrototypeTwo from './prototypeOne/PrototypeTwo';
import PrototypeOne from './prototypeOne/PrototypeOne';
import Exploration from './prototypeOne/Exploration';
import App from './App';

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prototypeOne" element={<PrototypeOne />} />
        <Route path="/prototypeTwo" element={<PrototypeTwo />} />
        <Route path="/prototypeThree" element={<PrototypeThree />} />
        <Route path="/Exploration" element={<Exploration />} />
      </Routes>
    </div>
  );
}

export default AppRouter;