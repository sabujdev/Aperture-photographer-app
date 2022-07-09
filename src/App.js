import "./App.css";
import Header from "./components/Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs";
import About from "./components/Pages/About/About";
import Checkout from "./components/Pages/Checkout/Checkout";
import CheckoutSuccess from "./components/Pages/CheckoutSuccess/CheckoutSuccess";
import NotFound from "./components/Shared/NotFound/NotFound";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import Footer from "./components/Shared/Footer/Footer";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword";
import RequireAuth from "./components/Pages/RequireAuth/RequireAuth";
import MyAccount from "./components/Pages/MyAccount/MyAccount";
import RedirectToAccount from "./components/Pages/RedirectToAccount/RedirectToAccount";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/signup"
          element={
            <RedirectToAccount>
              <SignUp></SignUp>
            </RedirectToAccount>
          }
        ></Route>
        <Route
          path="/my-account"
          element={
            <RequireAuth>
              <MyAccount></MyAccount>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/reset-password"
          element={
            <RedirectToAccount>
              <ResetPassword></ResetPassword>
            </RedirectToAccount>
          }
        ></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout-success"
          element={<CheckoutSuccess></CheckoutSuccess>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
