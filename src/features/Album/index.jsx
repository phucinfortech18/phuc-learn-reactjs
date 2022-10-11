import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Mới phát hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/b/6/4/fb6432baab82cdec43c6c6fa9428c44c.jpg",
    },
    {
      id: 2,
      name: "Tâm Trạng Tan Chậm",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/7/9/6/0796634b97697825080cf66421a2a400.jpg",
    },
    {
      id: 3,
      name: "Nghệ Sĩ Yêu Thích",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/6/4/a/964a3e60e21d1af2b306f7bb397caa00.jpg",
    },
    {
      id: 4,
      name: "Nhạc Mới Mỗi Ngày",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/4/7/23477db7f635c7a18ae895e971cd6706.jpg",
    },
  ];
  return (
    <div>
      <h2>Co the ban se thich day</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
