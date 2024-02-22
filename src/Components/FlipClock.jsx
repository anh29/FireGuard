import { useState, useEffect } from "react";
import "../assets/css/status.css"; // You should create a CSS file for styling

// eslint-disable-next-line react/prop-types
function FlipClock({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="countdown-clock">
      <div className="countdown-item">
        <div className="countdown-value">{timeRemaining.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeRemaining.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeRemaining.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeRemaining.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
}

export default FlipClock;
