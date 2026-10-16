import { useEffect, useState } from "react";

export default function BracketName({ name = "Benon Papa", className = "" }) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("closed"); // "closed" | "opening" | "typing" | "holding" | "deleting" | "closing"

  useEffect(() => {
    let timeout;

    if (phase === "closed") {
      // Brackets are touching/closed, pause briefly then smoothly slide open
      timeout = setTimeout(() => {
        setPhase("opening");
      }, 550);
    } else if (phase === "opening") {
      // Brackets slide open, now begin typing out the name
      timeout = setTimeout(() => {
        setPhase("typing");
      }, 400);
    } else if (phase === "typing") {
      if (text.length < name.length) {
        timeout = setTimeout(() => {
          setText(name.slice(0, text.length + 1));
        }, 110);
      } else {
        setPhase("holding");
      }
    } else if (phase === "holding") {
      // Name is fully typed out, hold so visitors can read comfortably
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 3500);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(name.slice(0, text.length - 1));
        }, 45);
      } else {
        // Name is completely erased, now close the brackets
        setPhase("closing");
      }
    } else if (phase === "closing") {
      timeout = setTimeout(() => {
        setPhase("closed");
      }, 350);
    }

    return () => clearTimeout(timeout);
  }, [phase, text, name]);

  const isClosed = phase === "closed" || phase === "closing";

  return (
    <span className={`bracket-name-container ${isClosed ? "state-closed" : "state-open"} ${className}`}>
      <span className="bracket-bracket left" aria-hidden="true">[</span>
      <span className="bracket-text-slot">
        <span className="bracket-typed-name">{text}</span>
        <span className={`bracket-cursor ${isClosed ? "is-hidden" : ""}`} aria-hidden="true" />
      </span>
      <span className="bracket-bracket right" aria-hidden="true">]</span>
    </span>
  );
}
