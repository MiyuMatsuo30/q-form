import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const handlePage2 = () => {
        navigate('/Page2')
    }
    const handlePage3 = () => {
        navigate('/Page3')
    }
    
    return (
        <>
            <h1>Home</h1>
            <button onClick={handlePage2}>Page2へ</button>
            <br />
            <button onClick={handlePage3}>Page3へ</button>
        </>
    )
}