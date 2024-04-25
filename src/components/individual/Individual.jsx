import "./individual.css";

const Individual = () => {
  /* ============================== */
  //Placeholders for variables that will be passed in from the backend
  let position = "Team Leader";
  let title = "SSG";
  let last_name = "Smith";
  /* == ============================ */

  return (
    <div className="individual-container">
      <div className="position-container">{position}</div>
      <div className="name-container">
        <div className="title-container">{title}</div>
        <div className="last-name-container">{last_name}</div>
      </div>
    </div>
  );
};

export default Individual;
