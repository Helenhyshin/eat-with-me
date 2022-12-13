import "./Card.css";
function Card() {
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", backgroundColor: "black" }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/549327cde4b00b004d637940/1645100931875-0UKCON05JMAMSNCO7UYR/Sushi_Seki_NF_0213.jpg?format=2500w"
          className="card-img-top"
          alt="Sushi"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="www.google.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/549327cde4b00b004d637940/1645100931875-0UKCON05JMAMSNCO7UYR/Sushi_Seki_NF_0213.jpg?format=2500w"
          className="card-img-top"
          alt="Sushi"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="www.google.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", backgroundColor: "black" }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/549327cde4b00b004d637940/1645100931875-0UKCON05JMAMSNCO7UYR/Sushi_Seki_NF_0213.jpg?format=2500w"
          className="card-img-top"
          alt="Sushi"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="www.google.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
