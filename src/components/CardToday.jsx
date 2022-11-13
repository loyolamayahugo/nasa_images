
export const CardToday = ({ data, date, imgUrl, error, setDatePiker }) => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 container_img">
        {imgUrl.includes("youtube") ? (
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              title="myFrame"
              className="embed-responsive-item"
              src={data.url}
            ></iframe>
          </div>
        ) : (
          <img className="img_nasa" src={data.url} alt="picture_day" />
        )}
      </div>

      <div className="col-md-6 col-sm-12">
        <h2 className="title">{data.title}</h2>
        <p>{error}</p>
        <p className="body_text">{data.explanation}</p>

        <h3 className="body_text">Selec date: {date}</h3>
        <div>
          <input type="date" onChange={(e) => setDatePiker(e.target.value)} />
        </div>
      </div>
    </div>
    
  );
};
