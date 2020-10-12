import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div class="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        verified
        title="React Tutorial for Beginners [React js]"
        channelName="Programming with Mosh"
        views="2.6M views"
        timestamp="2 years ago"
        channelDescription="React Tutorial - Learn to build fast web apps with React (React js) from scratch..."
        image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUo6f6PMFUNrF7BX5BOCiSyqVMcg"
      />

      <ChannelRow
        verified
        title="React Tutorial for Beginners [React js]"
        channelName="Programming with Mosh"
        views="2.6M views"
        timestamp="2 years ago"
        channelDescription="React Tutorial - Learn to build fast web apps with React (React js) from scratch..."
        image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUo6f6PMFUNrF7BX5BOCiSyqVMcg"
      />

      <ChannelRow
        verified
        title="React Tutorial for Beginners [React js]"
        channelName="Programming with Mosh"
        views="2.6M views"
        timestamp="2 years ago"
        channelDescription="React Tutorial - Learn to build fast web apps with React (React js) from scratch..."
        image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUo6f6PMFUNrF7BX5BOCiSyqVMcg"
      />
    </div>
  );
}

export default SearchPage;
