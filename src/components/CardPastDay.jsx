
export const CardPastDay = ({pastDate, date, imgUrl, setPastDayPiker}) => {
    
    return (
      <div className="row">
        <div className="col-md-6 col-sm-12 container_img">
            {imgUrl.includes('youtube') ? (
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="myFrame" className="embed-responsive-item" src={pastDate.url}></iframe>
                </div>
            ) : (
                <img className="img_nasa" src={pastDate.url} alt="picture_day" />
            )

            }
        </div>

        <div className="col-md-6 col-sm-12">
          <h2 className="title">{pastDate.title}</h2>
          <p className="body_text">{pastDate.explanation}</p>

          <h3 className="body_text">Selec date: {date}</h3>
          <div>
            <input
              type="date"
              onChange={(e) => setPastDayPiker(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
}


{/* <img className="img_nasa" src={pastDate.url} alt="picture_day" /> */}