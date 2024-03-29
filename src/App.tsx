import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/Home";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/exercise1" element={<Exercise1/>}/>
                <Route path="/exercise2" element={<Exercise2/>}/>
            </Routes>
        </Layout>
     );
}

export default App;