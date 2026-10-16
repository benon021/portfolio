import { useState } from "react";
import { profile } from "../data.js";

export default function PhotoFrame() {
  const [failed, setFailed] = useState(false);
  const initials = profile.name.split(" ").map((p) => p[0]).join("");

  return (
    <div className="photo-frame">
      <span className="bracket bracket-tl" />
      <span className="bracket bracket-br" />
      {failed ? (
        <div className="photo photo-fallback" role="img" aria-label={`${profile.name} photo placeholder`}>
          {initials}
        </div>
      ) : (
        <img
          className="photo"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
