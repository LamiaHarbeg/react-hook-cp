import React from 'react'
import "./MovieCard.css"
import Stars from "simple-rating-stars";


function MovieCard({title, description, posterUrl, rate}) {
	const CardRating = () => {
		let stars = 0;
		const outOf = 5;
		return (
		  <>
			 <div>      
			<Stars 
			  stars={stars + rate}
			  outOf={outOf}
			  full={"#ffb703"}
			  empty={"#FFFFFF"}
			  stroke={"#ffb703"}
			/></div>
		  </>
		);
	  };
	    return (
        <>
<div className="container">
	<div className="movie-card">
		<div className="movie-header ">
			<div className="header-icon-container">
				<img alt="moviePoster" src={posterUrl}/>
		    </div>
		</div>   
<div className="movie-content">
			<div className="movie-content-header">
							<h3 className="movie-title"> {title}</h3>
			</div>
			<div className="movie-info">
				<div className="info-section">
					<div className="description">
					<label>Descripton</label>
	<p>{description}</p>
			</div>
			<CardRating  />
     </div>
		    </div>
		</div>
</div>
</ div>
</> );
}
    export default MovieCard;