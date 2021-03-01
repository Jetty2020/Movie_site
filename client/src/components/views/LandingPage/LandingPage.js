import React, { useEffect, useState } from 'react'
import { API_URL, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import env from "react-dotenv";
import GridCards from '../commons/GridCards';
import { Row } from 'antd';


function LandingPage() {
	const [Movies, setMovies] = useState([]);
	const [MainMovieImage, setMainMovieImage] = useState(null);
	const [CurrentPage, setCurrentPage] = useState(0)

	useEffect(() => {
		const endpoint = `${API_URL}movie/popular?api_key=${env.API_KEY}&language=en-US&page=1`;
		fetchMovies(endpoint)
	}, []);

	const fetchMovies = (endpoint) => {
		fetch(endpoint)
			.then(response => response.json())
			.then(response => {
				console.log(response.results);
				setMovies([...Movies, ...response.results]); //이전의 Movies data와 새로 로드한 data를 Movies에 담는 함수
				setMainMovieImage(response.results[0]); //MainMovieImage 저장
				setCurrentPage(response.page); //CurrentPage에 현재 페이지값 저장
			});
	};

	const loadMoreItems = () => { //loadMore 버튼 함수
		const endpoint = `${API_URL}movie/popular?api_key=${env.API_KEY}&language=en-US&page=${CurrentPage + 1}`;
    fetchMovies(endpoint);
  };

	return (
		<div style={{ width: '100%', margin: '0' }}>
			{/* Main Image */}
			{/* something && action ,something이 있으면 action 보여줘라 */}
			{MainMovieImage &&
				<MainImage
					image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
					title={MainMovieImage.original_title}
					text={MainMovieImage.overview}
				/>
			}
			<div style={{ width: '85%', margin: '1rem auto' }}>
				<h2>Movies by latest</h2>
				<hr />
				{/* Movie Grid Cards */}
				<Row gutter={[16, 16]} >
          {Movies && Movies.map((movie, index) => (
            <React.Fragment key={index}>
              <GridCards
                image={movie.poster_path ?
                  `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                movieId={movie.id}
                movieName={movie.original_title}
              />
            </React.Fragment>
          ))}
        </Row>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<button onClick={loadMoreItems}> Load More</button>
			</div>
		</div>
	)
}

export default LandingPage;