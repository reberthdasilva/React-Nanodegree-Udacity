import React, {Component} from 'react';

export default class FavoriteMovies extends Component {
  	createList() {
    	const profiles = this.props.profiles,
          users = this.props.users,
          movies = this.props.movies;
    	
      	return profiles.map(profile => {
          	let userName = users[profile.userID].name;
          	let movieName = movies[profile.favoriteMovieID].name;
        	return (<li key={profile.id}>{userName}'s favorite movie is {movieName}.</li>)
        })
    }
  
	render() {
    	return (
      		<ul>
             {this.createList()}
      		</ul>
        )
    }
}