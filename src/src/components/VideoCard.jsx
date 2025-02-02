import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          title={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E" }}>
        <Link to={videoId && `/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
