import { lazy, Suspense } from "react";
import "./App.css";
import "./style/global.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";


const LogIn = lazy(() => import("./components/login/Login"));
const Home = lazy(() => import("./components/home/Home"));
const ErrorHandlerPage = lazy(() => import("./components/error/ErrorPage"));
const ChooseMeal = lazy(() => import("./components/choose-meal/ChooseMeal"));
const HistoryOfMeals = lazy(() => import("./components/history-of-meals/HistoryOfMeals"));
const Tmp = lazy(() => import("./components/choose-meal/tmp"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="LogIn"
          element={
            <Suspense fallback={<ErrorHandlerPage />}>
              <LogIn />
            </Suspense>
          }
        />
        {/* <Route path="/" element={<AppLayout />}> */}
          <Route
            path="Home"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <Home />
              </Suspense>
            }
          />
                   <Route
            path="ChooseMeal"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <ChooseMeal />
              </Suspense>
            }
          />
          <Route
            path="Tmp"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <Tmp />
              </Suspense>
            }
          />
                   <Route
            path="HistoryOfMeals"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <HistoryOfMeals />
              </Suspense>
            }
          />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
