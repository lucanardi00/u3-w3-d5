import React from 'react';
import { Row, Col, ProgressBar, Image } from 'react-bootstrap';
import shuffleBtn from '../assets/playerbuttons/shuffle.png';
import prevBtn from '../assets/playerbuttons/prev.png';
import playBtn from '../assets/playerbuttons/play.png';
import nextBtn from '../assets/playerbuttons/next.png';
import repeatBtn from '../assets/playerbuttons/repeat.png';
import { useSelector } from 'react-redux';

const PlayerControls = () => {
    const selectedSong = useSelector((state) => state.song.selectedSong);

    return (
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <Row className="h-100">
                <Col lg={{ span: 10, offset: 2 }}>
                    <div className="d-flex align-items-center justify-content-between">
                        <Col md={4} className="playerControls">
                            <div className="d-flex">
                                <a href="#">
                                    <img src={shuffleBtn} alt="shuffle" />
                                </a>
                                <a href="#">
                                    <img src={prevBtn} alt="prev" />
                                </a>
                                <a href="#">
                                    <img src={playBtn} alt="play" />
                                </a>
                                <a href="#">
                                    <img src={nextBtn} alt="next" />
                                </a>
                                <a href="#">
                                    <img src={repeatBtn} alt="repeat" />
                                </a>
                            </div>
                            <ProgressBar className="mt-3" now={0} />
                        </Col>
                        <Col md={8} className="d-flex align-items-center">
                            {selectedSong && (
                                <>
                                    <Image src={selectedSong.album.cover_small} alt="Album Cover" fluid className="mr-3" />
                                    <div className="text-light">
                                        <h4 style={{ color: '#FFFFFF' }}>{selectedSong.title}</h4>
                                        <p style={{ color: '#FFFFFF' }}>{selectedSong.artist.name}</p>
                                    </div>
                                </>
                            )}
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default PlayerControls;
