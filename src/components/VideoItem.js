import React from 'react';

import { Paper, Typography, Grid } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
        <img style={{ marginRight: '20px' }} src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <Typography variant="subtitle2">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;