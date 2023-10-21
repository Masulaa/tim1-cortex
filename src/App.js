import { lazy, Suspense } from "react";
import "./App.css";
import "./style/global.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";


const LogIn = lazy(() => import("./components/login/Login"));
const Home = lazy(() => import("./components/home/Home"));
const ErrorHandlerPage = lazy(() => import("./components/error/ErrorPage"));
const ChooseMeal = lazy(() => import("./components/choose-meal/ChooseMeal"));
const HistoryOfMeals = lazy(() =>
  import("./components/history-of-meals/HistoryOfMeals")
);
const SingleMeal = lazy(() => import("./components/single-meal/SingleMeal"));
const OrderSent = lazy(() => import("./components/order-sent/OrderSent"))
const MyProfile = lazy(()=>import("./components/my-profile/MyProfile"))


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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
            path="MyProfile"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <MyProfile />
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
            path="RateOrder"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <RateOrder />
              </Suspense>
            }
          />
           <Route
            path="SingleMeal"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <SingleMeal />
              </Suspense>
            }
          />
          <Route
            path="OrderSent"
            element={
              <Suspense fallback={<ErrorHandlerPage />}>
                <OrderSent />
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