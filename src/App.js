
import { lazy, Suspense } from "react";

import "./App.css";

import "./style/global.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const LogIn = lazy(() => import("./components/login/Login"));

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback>
            <LogIn/>
          </Suspense>
        }
      />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
