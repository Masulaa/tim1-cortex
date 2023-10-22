import { lazy, Suspense } from "react";
import "./App.css";
import "./style/global.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const LogIn = lazy(() => import("./components/login/Login"));
const Home = lazy(() => import("./components/home/Home"));
const ChooseMeal = lazy(() => import("./components/choose-meal/ChooseMeal"));
const HistoryOfMeals = lazy(() =>
  import("./components/history-of-meals/HistoryOfMeals")
);
const SingleMeal = lazy(() => import("./components/single-meal/SingleMeal"));
const OrderSent = lazy(() => import("./components/order-sent/OrderSent"));
const TrackOrder = lazy(() => import("./components/track-order/TrackOrder"));
const MyProfile = lazy(() => import("./components/my-profile/MyProfile"));
const ConfirmOrder = lazy(() =>
  import("./components/confirm-order/ConfirmOrder")
);
const Settings = lazy(() => import("./components/settings/Settings"));

const RateOrder = lazy(() => import("./components/rate-order/RateOrder"));

const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<NotFound />}>
              <LogIn />
            </Suspense>
          }
        />
        {/* <Route path="/" element={<AppLayout />}> */}
        <Route
          path="Home"
          element={
            <Suspense fallback={<NotFound />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="MyProfile"
          element={
            <Suspense fallback={<NotFound />}>
              <MyProfile />
            </Suspense>
          }
        />
        <Route
          path="ChooseMeal"
          element={
            <Suspense fallback={<NotFound />}>
              <ChooseMeal />
            </Suspense>
          }
        />
        <Route
          path="ChooseMeal/SingleMeal/:id"
          element={
            <Suspense fallback={<NotFound />}>
              <SingleMeal />
            </Suspense>
          }
        />
        <Route
          path="OrderSent"
          element={
            <Suspense fallback={<NotFound />}>
              <OrderSent />
            </Suspense>
          }
        />
        <Route
          path="ConfirmOrder"
          element={
            <Suspense fallback={<NotFound />}>
              <ConfirmOrder />
            </Suspense>
          }
        />
        <Route
          path="TrackOrder"
          element={
            <Suspense fallback={<NotFound />}>
              <TrackOrder />
            </Suspense>
          }
        />
        <Route
          path="Settings"
          element={
            <Suspense fallback={<NotFound />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="HistoryOfMeals"
          element={
            <Suspense fallback={<NotFound />}>
              <HistoryOfMeals />
            </Suspense>
          }
        />
        <Route
          path="RateOrder"
          element={
            <Suspense fallback={<NotFound />}>
              <RateOrder />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<NotFound />}>
              <NotFound />
            </Suspense>
          }
        />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
