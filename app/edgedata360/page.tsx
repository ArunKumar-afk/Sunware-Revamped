"use client";
import { useEffect } from "react";

// EdgeData360 has been rebranded to Relim.ai — redirect all traffic
export default function EdgeData360Redirect() {
  useEffect(() => {
    window.location.replace("/relim-ai/");
  }, []);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", fontFamily: "sans-serif" }}>
      <p style={{ color: "#555" }}>
        Redirecting to <a href="/relim-ai/" style={{ color: "#EF7F1A" }}>Relim.ai</a>…
      </p>
    </div>
  );
}
