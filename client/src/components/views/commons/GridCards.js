import React from 'react'
import { Col } from 'antd';


function GridCards(props) {
  return (
    // col은 총 24개의 column으로 이루어져 있음
    <Col lg={6} md={8} sm={12} xs={24}>
      <div style={{ position: 'relative' }}>
        <a href={`/movie/${props.movieId}`} >
          <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
        </a>
      </div>
    </Col>
  )
}

export default GridCards;