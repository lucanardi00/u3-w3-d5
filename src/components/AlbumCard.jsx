import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSong, toggleLike } from '../redux/actions/songSlice';

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();
  const selectedSong = useSelector(state => state.song.selectedSong);
  const likedSongs = useSelector(state => state.song.likedSongs);

  const handleSelectSong = () => {
    dispatch(selectSong(singleSong));
  };

  const handleLikeClick = () => {
    dispatch(toggleLike({ songId: singleSong.id }));
  };

  const isLiked = likedSongs.includes(singleSong.id);

  return (
    <div className="col text-center">
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" onClick={handleSelectSong} />
      <p>
        Track: "{singleSong.title}"<br />
        Artist: {singleSong.artist.name}
      </p>
      <button onClick={handleLikeClick}>{isLiked ? 'Unlike' : 'Like'}</button>
    </div>
  );
};

export default AlbumCard;
