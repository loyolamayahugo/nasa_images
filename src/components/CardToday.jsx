
export const CardToday = ({ data, date, imgUrl, error, setDatePiker }) => {
  const {url, title, explanation } = data
  
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 container_img">
        {imgUrl.includes("youtube") ? (
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              title="myFrame"
              className="embed-responsive-item"
              src={url}
            ></iframe>
          </div>
        ) : (
          <img className="img_nasa" src={url} alt="picture_day" />
        )}
      </div>

      <div className="col-md-6 col-sm-12">
        <h2 className="title">{title}</h2>
        <p>{error}</p>
        <p className="body_text">{explanation}</p>

        <h3 className="body_text">Selec date: {date}</h3>
        <div>
          <input type="date" onChange={(e) => setDatePiker(e.target.value)} />
        </div>
      </div>
    </div>
    
  );
};
