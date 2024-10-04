import React from "react";

const Vibrate = () => {
  const vibratePhone = () => {
    // Check if the Vibration API is supported
    if (navigator.vibrate) {
      // Vibrates for 1000ms (5 second)
      navigator.vibrate(5000);
    } else {
      console.log("Vibration API is not supported by this browser or device.");
    }
  };

  return (
    <div>
      <button onClick={vibratePhone}>Vibrate Phone</button>
    </div>
  );
};

export default Vibrate;