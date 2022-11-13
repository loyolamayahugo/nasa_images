import './styles/Cardmovile.css';

export const Cardmovile = ({ data, setDatePiker }) => {
  return (
    <>
      <div className="card card-container card-tablet">
        <img src={data.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.explanation}</p>
          <input type="date" onChange={(e) => setDatePiker(e.target.value)} />
        </div>
      </div>

      <div className="card-desktop">
        <img src={data.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.explanation}</p>
          <input type="date" onChange={(e) => setDatePiker(e.target.value)} />
        </div>
      </div>
    </>
  );
};
