import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

// https://stackoverflow.com/questions/16647380/max-width-vs-min-width#:~:text=Typically%2C%20with%20min%2Dwidth%20patterns,then%20target%20progressively%20larger%20screens.

class Article extends React.Component {
   

    render() {
        const description = this.props.description;
        const hasAudioAvailable = this.props.hasAudioAvailable;
        const authorName = this.props.author.name;
        const authorImage = this.props.author.image; 
        const isMediumMember = this.props.author.isMediumMember;
        const image = this.props.image;
        const link = this.props.link;
        const memberPreview = this.props.memberPreview;
        const minutesToRead =  this.props.minutesToRead;
        const postedDate = this.props.postedDate;
        const title = this.props.title;

        const shortDate = new Date(postedDate);
        const monthShortName = shortDate.toLocaleString('default', { month: 'short' });
        const monthDay = shortDate.getDate();

        console.log(shortDate);
        return (
            <div className="card-container">
                
                <div className="card-image-container" >
                    <img className="card-image" src={ image } width="30px" height="30px" />
                       
                </div>
                <div className="card-content">
                    <div className="card-article-info">
                        <span className="card-article-title"> { title } </span>
                        <span className="card-article-description"> { description } </span>
                    </div>



                    <div className="card-profile-info">
                        <div className="writter-photo-container">
                            <img className="writter-photo-img"  width="100%" src={ authorImage } />
                        </div>
                        <div className="writter-info-container"> 
                         <span className="writter-name"> { authorName } </span>
                         <span className="writter-posted-date" > { monthShortName } { monthDay }</span>
                         <span className="writter-minutes-toread"> - { minutesToRead } </span>
                        </div>
                        <div className="writter-profile-link"> 
                            <img className="icon-display" width="70%" src="anchor-icon.png" />
                        </div>
                    </div>
                </div>
                
            </div>

        );
    }
}


Article.propTypes = {
    author: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    minutesToRead: PropTypes.number.isRequired,
    postedDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}    

export default Article;
