import "./individual.css";

const Individual = () => {
  /* ============================== */
  //Placeholders for variables that will be passed in from the backend
  let position = "Team Leader";
  let title = "SSG";
  let last_name = "Smith";
  let is_cert_complete = true;
  let percent_cert_complete = 80;
  /* == ============================ */

  return (
    <div className="individual-container">
      <div className="position-container">{position}</div>

      <div className="name-stat-container">
        <div className="name-container">
          <div className="title-container">{title}</div>
          <div className="last-name-container">{last_name}</div>
        </div>

        <div className="cert-status-container">
          {is_cert_complete ? (
            <img
              src="src/assets/images/check-mark.svg"
              width="30"
              height="30"
              alt="Check Mark"
            />
          ) : (
            `${percent_cert_complete}%`
          )}
        </div>
      </div>
    </div>
  );
};

export default Individual;
