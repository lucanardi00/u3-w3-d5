import React from 'react';
import { useDispatch } from 'react-redux';
import { selectSong } from '../redux/actions/songSlice';

const SongItem = ({ song }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectSong(song));
  };

  return (
    <div onClick={handleClick}>
      <h4>{song.title}</h4>
      <p>{song.artist}</p>
    </div>
  );
};

export default SongItem;