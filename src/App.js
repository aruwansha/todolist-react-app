import { useEffect, useState } from "react";
import Login from "pages/Login";
import Home from "pages/Home";
import Header from "parts/Header";
import Footer from "parts/Footer";

import AuthProvider from "store/context/AuthProvider";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(function () {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLogin(true);
    }
  }, []);

  function loginHandler(email, password) {
    localStorage.setItem("isLoggedIn", 1);
    setIsLogin(true);
  }

  function logoutHandler(event) {
    event.preventDefault();
    localStorage.removeItem("isLoggedIn");
    setIsLogin(false);
  }

  let content;
  if (!isLogin) {
    content = <Login onLogin={loginHandler} />;
  }
  if (isLogin) {
    content = <Home />;
  }
  return (
    <AuthProvider
      isLogin={isLogin}
      onLogin={loginHandler}
      onLogout={logoutHandler}
    >
      <Header />
      {content}
      <Footer />
    </AuthProvider>
  );
}

export default App;
