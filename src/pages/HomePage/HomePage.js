// <--------------------- SCSS IMPORTS --------------------->
import "./HomePage.scss";
// <--------------------- COMPONENT IMPORTS --------------------->
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comment from "../../components/Comment/Comment";
import SuggestedVideoBox from "../../components/SuggestedVideoBox/SuggestedVideoBox";
import Video from "../../components/Video/Video";

// <--------------------- REACT IMPORTS --------------------->
import { useState, useEffect } from "react";
import axios from "axios";

// <--------------------- API INFORMATION --------------------->
const url = `https://project-2-api.herokuapp.com/videos?api_key=${process.env.REACT_APP_API_KEY}`;
const clickedVideo = (videoId) =>
  `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${process.env.REACT_APP_API_KEY}`;

const HomePage = () => {
  // setting the initial video as the first video
  const [mainVideo, setMainVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  // State for the video details
  const [videoDetails, setVideoDetails] = useState([]);
  // State for the videos
  const [videos, setVideos] = useState([]);

  /**
   * Deals with the clicking of the videos on the side bar
   * Takes the ID of the video as a parameter and passes it to the
   * fuction on line 15
   */
  const clickedVideoFunction = async (videoId) => {
    const { data } = await axios.get(clickedVideo(videoId));
    setVideoDetails(data);
  };

  // <--------------------- useEffect FOR FETCHING VIDEO DETAILS --------------------->
  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${mainVideo}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setVideoDetails(data);
      } catch (error) {
        console.log("You got an error!", error);
      }
    };
    getVideoDetails();
  }, []);

  // <--------------------- useEffect FOR FETCHING VIDEOS --------------------->
  useEffect(() => {
    const getVideos = async () => {
      try {
        const { data } = await axios.get(url);
        setVideos(data);
      } catch (error) {
        console.log("You got an error!", error);
      }
    };
    getVideos();
  }, []);

  return (
    <>
      <Video videoDetails={videoDetails} />
      <main className="main">
        <section className="main--left">
          <VideoInfo
            videoDetails={videoDetails}
            mainVideo={mainVideo}
            clickedVideoFunction={clickedVideoFunction}
          />
          <Comment videoDetails={videoDetails} />
        </section>
        <section className="main--right">
          <SuggestedVideoBox videos={videos} videoDetails={videoDetails} />
        </section>
      </main>
    </>
  );
};

export default HomePage;