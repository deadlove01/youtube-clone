import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  title,
  channelName,
  views,
  timestamp,
  channelDescription,
  verified,
  videoId
}) {
  return (
    <div className="channelRow">
      <img src={image} alt={`https://www.youtube.com/watch?v=${videoId}`} onClick={()=>{
        window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
      }} />

      <div className="channelRow__text">
        <h3>{title}</h3>

        <p className="channelRow__headline">
          {channelName}
          {verified && <CheckCircleOutlineOutlinedIcon />} • {views} •{" "}
          {timestamp}
        </p>
        <p className="channelRow__description">{channelDescription}</p>
      </div>
    </div>
  );
}
export default ChannelRow;
