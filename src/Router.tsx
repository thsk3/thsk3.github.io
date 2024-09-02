import { Routes, Route } from "react-router-dom";
import Acompo from "./Acompo";
import Bcompo from "./Bcompo";
import Home from "./Home";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aa" element={<Acompo />} />
            <Route path="/bb" element={<Bcompo />} />
        </Routes>
    );
}
