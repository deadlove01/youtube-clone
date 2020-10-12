import React, {useEffect, useState} from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";
import { useParams } from "react-router";
import youtube from "../../apis/youtube";
import { CodeOutlined } from "@material-ui/icons";

function SearchPage() {
  let searchTerm = useParams();
  const [videos, setVideos] = useState([])
  
  const searchSubmit = async () =>{
    const res = await youtube.get('/search', {
      q: searchTerm
    })
    setVideos(res.data.items);
    console.log(res.data.items);
  }

  useEffect(() => {
    searchSubmit();
  }, [searchTerm])

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {videos && videos.length > 0 && 
      videos.map((item) => {
        // console.log(item.snippet);
        return ( <ChannelRow
          verified
          title={item.snippet.title}
          channelName={item.snippet.channelTitle}
          views="2.6M views"
          timestamp="2 years ago"
          channelDescription={item.snippet.description}
          image={item.snippet.thumbnails.default.url} 
          videoId={item.id.videoId}
        />)
      })
       }
     

      {/* <ChannelRow
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
      /> */}
    </div>
  );
}

export default SearchPage;
