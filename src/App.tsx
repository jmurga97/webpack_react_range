import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/Home";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import { HelmetLayout } from "./layouts/HelmetLayout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <HelmetLayout title="Home" description="MCA Tech Test">
              <Home />
            </HelmetLayout>
          }
        />
        <Route
          path="/exercise1"
          element={
            <HelmetLayout
              title="Exercise 1 - Continuos Range"
              description="Component that provides a input range with customizable min and max values."
            >
              <Exercise1 />
            </HelmetLayout>
          }
        />
        <Route
          path="/exercise2"
          element={
            <HelmetLayout
              title="Exercise 2 - Fixed Range"
              description="Component that provides a input range with customizable min and max values."
            >
              <Exercise2 />
            </HelmetLayout>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
