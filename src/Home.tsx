import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>home</h1>
            <div
                onClick={() => {
                    navigate("/aa");
                }}>
                aa
            </div>
            <div
                onClick={() => {
                    navigate("/bb");
                }}>
                aa
            </div>
        </div>
    );
}
