
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.TelegramLoginWidget = {
      dataOnauth: (user) => {
        // Save user data and redirect to home page
        localStorage.setItem("telegramUser", JSON.stringify(user));
        navigate("/");
      },
    };
  }, [navigate]);

  return (
    <div className="Login">
      <h2>Login with Telegram</h2>
      <div
        id="telegram-login"
        data-size="large"
        data-radius="10"
        data-onauth="TelegramLoginWidget.dataOnauth(user)"
        data-request-access="write"
      ></div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login="YOUR_BOT_NAME"
        data-size="large"
        data-auth-url="YOUR_SERVER_URL/auth/telegram"
        data-request-access="write"
      ></script>
    </div>
  );
};

export default Login;
