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
}) {
  return (
    <div className="channelRow">
      <img src={image} alt="" />

      <div class="channelRow__text">
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
