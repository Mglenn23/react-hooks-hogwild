import { useState } from "react";
function ContentCard({ name, image, greased, medal, specialty, weight }) {
  const [show, setShow] = useState(true);

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="imgcard" style={{ height: "200px" }} />
      </div>
      <div className="content">
        <div className="header">{name}</div>

        <button
          onClick={() => {
            setShow((s) => !s);
          }}
        >
          Show Detail
        </button>
      </div>
      {!show ? (
        <div className="extra content">
          <span>
            <h4>Speciality:{specialty}</h4>
          </span>

          <h4>Medal:{medal}</h4>

          <span className="left floated">Greased: {greased.toString()}</span>
          <span className="right floated">Weight:{weight}</span>
        </div>
      ) : null}
    </div>
  );
}
export default ContentCard;
