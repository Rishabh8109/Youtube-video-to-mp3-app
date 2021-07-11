import React, { useState } from "react";
import axios from "axios";

function Covnerter() {
  const [loading, setloading] = useState(false);
  const [videoId, setvideoId] = useState("");
  const [data, setdata] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://youtube-to-mp32.p.rapidapi.com/yt_to_mp3?video_id=${videoId}`;

    setvideoId("");
    setloading(true);
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        "x-rapidapi-key": "41d1f7c16cmsh14e466aaa80de90p16d893jsn0de531cec9ad",
        "x-rapidapi-host": "youtube-to-mp32.p.rapidapi.com",
      },
    });

    setdata(res.data);
    setloading(false);
  };

  const buttonStyle = {
    opacity: loading ? ".4" : "1",
  };

  return (
    <section className="converter">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Put video link here"
          className="input-box"
          value={videoId}
          onChange={(e) => setvideoId(e.target.value)}
        />
        <button type="submit" style={{ ...buttonStyle }}>
          {loading ? "converting..." : "convert"}
        </button>
      </form>
      {data && (
        <>
          <div className="details" >
            <img src={data.Video_Thumbnail} alt="thumbnail" />
            <div>
              <h1>Title - {data.Title}</h1>
              <p>Download size - {data.Download_Size}</p>
              <button>
                <a href={`${data.Download_url}`} download>
                  Download
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Covnerter;
