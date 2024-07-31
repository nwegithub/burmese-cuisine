import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos } from ".";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data?.items[0]);
    });

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return <span>Loading... </span>;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box position="sticky" top="86px" width="95%" margin="0 auto">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" fontWeight="bold" p={2} color="#fff">
              {title}
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  fontWeight="bold"
                  p={2}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "15px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Box display="flex" gap={2} px={2}>
                <Typography variant="body1" color="#fff">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" color="#fff">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Box>
            </Stack>

            <Typography variant="subtitle2" p={2} color="#fff">
              {seeMore ? description : description.substring(0, 150)}
              <Button
                variant="text"
                onClick={() => setSeeMore((prev) => !prev)}
              >
                {seeMore ? "Show Less" : "Show More"}
              </Button>
            </Typography>
          </Box>
        </Box>

        <Box
          px={4}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
