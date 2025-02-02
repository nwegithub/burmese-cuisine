import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchAPI(
      `search?channelId=${id}&part=snippet&order=date&maxResults=30`
    ).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="92px">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(186,28,28,1) 50%, rgba(103,77,69,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
        <ChannelCard channel={channelDetail} marginTop="-130px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
