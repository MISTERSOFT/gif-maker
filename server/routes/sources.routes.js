const express = require('express');
const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const { tempFolderPath } = require('../utils').pathHelper

const router = express.Router();

// const VIDEO_QUALITY = +process.env.VIDEO_QUALITY;

router.get('/sources', (req, res) => {
  res.send('YES');
});

router.get('/sources/youtube', (req, res) => {
  // TODO:
  // * get from body the url
  // * fetch the youtube video
  // * convert the yt video to mp4
  // * send stream to client
  // const url = 'https://www.youtube.com/watch?v=8hKscdTX20s';
  const url = decodeURIComponent(req.query.url);
  const downloadOpts = {
    // quality: VIDEO_QUALITY,
    filter: 'videoonly'
  };
  const isUrlValide = ytdl.validateURL(url);
  if (isUrlValide) {
    const videoId = ytdl.getURLVideoID(url);
    const videoName = `${videoId}.mp4`;
    const output = path.join(tempFolderPath(), videoName);
    if (fs.existsSync(output)) {
      res.send(output);
    } else {
      const writeStream = fs.createWriteStream(output);
      ytdl(url, downloadOpts).pipe(writeStream).on('close', () => res.send(output));
    }
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
