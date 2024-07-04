import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Score from "../components/Score";
import Rank from "../components/Rank";
import CoinDiv from "../components/CoinDiv";
import IconBar from "../components/IconBar";
import EnergyBar from "../components/EnergyBar";
import "./Home.css";
import axios from "axios";

function Home() {
  const [coins, setCoins] = useState(0);
  const [rank, setRank] = useState("Diamond");
  const [energy, setEnergy] = useState(4500);
  const [animations, setAnimations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const telegramUser = localStorage.getItem("telegramUser");
    if (!telegramUser) {
      // Get Telegram WebApp data
      const initData = window.Telegram.WebApp.initDataUnsafe;
      axios
        .post("http://your-server-url.com/login", initData)
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem("telegramUser", response.data.user.username);
            navigate("/");
          } else {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Login failed", error);
          navigate("/login");
        });
    }
  }, [navigate]);

  const handleCoinClick = (e) => {
    e.preventDefault();
    if (energy > 0) {
      const touches = e.touches || [e];
      const newAnimations = [];
      const timestamp = Date.now();
      const rect = e.currentTarget.getBoundingClientRect();

      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        newAnimations.push({ id: `${timestamp}-${i}-${Math.random()}`, x, y });
      }

      setCoins((prevCoins) => prevCoins + touches.length);
      setEnergy((prevEnergy) => prevEnergy - touches.length);
      setAnimations((prevAnimations) => [...prevAnimations, ...newAnimations]);

      setTimeout(() => {
        setAnimations((prevAnimations) =>
          prevAnimations.filter(
            (anim) => !newAnimations.some((newAnim) => newAnim.id === anim.id)
          )
        );
      }, 1000); // Remove animation after 1 second
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + 3, 4500));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="Home">
      <div className="Header">
        <Score coins={coins} />
      </div>
      <Rank rank={rank} />
      <div className="coin-container" onPointerDown={handleCoinClick}>
        <CoinDiv disabled={energy === 0} />
        {animations.map((anim) => (
          <div
            key={anim.id}
            className="coin-animation"
            style={{
              top: `${anim.y}px`,
              left: `${anim.x}px`,
            }}
          >
            +1
          </div>
        ))}
      </div>
      <EnergyBar energy={energy} />
      <IconBar />
    </div>
  );
}

export default Home;
