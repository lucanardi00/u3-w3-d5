import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';

function MusicSection({ artistName, maxPerRow, query }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
        );
        if (response.ok) {
          const { data } = await response.json();
          setSongs(data.slice(0, maxPerRow * 3));
        } else {
          throw new Error('Error in fetching songs');
        }
      } catch (err) {
        console.log('error', err);
      }
    };

    fetchSongs();
  }, [artistName, maxPerRow]);

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < songs.length; i += maxPerRow) {
      const rowSongs = songs.slice(i, i + maxPerRow);
      rows.push(
        <div className="row" key={i}>
          {rowSongs.map((song, index) => (
            <div className="col" key={index}>
              <AlbumCard singleSong={song} />
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <h2>{query}</h2>
      {renderRows()}
    </div>
  );
}

export default MusicSection;
