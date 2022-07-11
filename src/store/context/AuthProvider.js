const { default: AuthContext } = require("./auth-context");

const AuthProvider = (props) => {
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: props.isLogin,
        onLogin: props.onLogin,
        onLogout: props.onLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
