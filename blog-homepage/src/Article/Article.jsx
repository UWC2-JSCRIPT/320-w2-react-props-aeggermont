import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';


function SpecialAttributes(props) {
    const hasAudioAvailable = props.hasAudioAvailable;
    const memberPreview = props.memberPreview;
    const title = props.title;
    const description = props.description;

    if ( hasAudioAvailable) {
        return (
            <div className="card-article-info-audio">
                <span className="card-article-audio "> Audio Available</span>
                <span className="card-article-title"> { title } </span>
                <span className="card-article-description"> { description } </span>
            </div>
        )
    } else if (memberPreview ) {
        return (
            <div className="card-article-info-audio">
                <span className="card-article-audio "> Member preview</span>
                <span className="card-article-title"> { title } </span>
                <span className="card-article-description"> { description } </span>
            </div>
        ) 
    }

    return (
        <div className="card-article-info">
            <span className="card-article-title"> { props.title } </span>
            <span className="card-article-description"> { props.description } </span>
        </div>   
    )
}

function MissedArtSpeAttributes(props) {
    const hasAudioAvailable = props.hasAudioAvailable;
    const memberPreview = props.memberPreview;
    const title = props.title;
    const description = props.description;

    if (memberPreview ) {
        return (
            <div className="missedcard-article-info">
                <span className="card-article-audio "> Member preview</span>
                <span className="missedcard-article-title"> { title } </span>
                <span className="missedcard-article-description"> { description } </span>
            </div>
        ) 
    }

    return (
        <div className="missedcard-article-info">
            <span className="missedcard-article-title"> { props.title } </span>
            <span className="missedcard-article-description"> { props.description } </span>
        </div>   
    ) 
}


function Article (props) {

    const missedArticle = props.missedArticle;
    const description = props.description;
    const hasAudioAvailable = props.hasAudioAvailable;
    const authorName = props.author.name;
    const authorImage = props.author.image; 
    const image = props.image;
    const link = props.link;
    const memberPreview = props.memberPreview;
    const minutesToRead =  props.minutesToRead;
    const postedDate = props.postedDate;
    const title = props.title;
    const shortDate = new Date(postedDate);
    const monthShortName = shortDate.toLocaleString('default', { month: 'short' });
    const monthDay = shortDate.getDate();


    if (!missedArticle) {
        return (
            <div className="card-container">
                <div className="card-image-container" >
                    <img className="card-image" src={ image } width="30px" height="30px" /> 
                </div>
                <div className="card-content">
                    <SpecialAttributes 
                        title={title} 
                        description={description}  
                        hasAudioAvailable={hasAudioAvailable}
                        memberPreview={memberPreview}
                    />
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
        )
    }

    if (missedArticle) {
        return (
            <div className="missedcart-card-container">
                <div className="missedcart-cardimage-container" >
                    <img className="missedcart-card-image" src={ image }  /> 
                </div>
                <div className="missedcart-content">
                    <MissedArtSpeAttributes 
                        title={title} 
                        description={description}  
                        hasAudioAvailable={hasAudioAvailable}
                        memberPreview={memberPreview}
                    />
                </div>
               
                <div className="missedcard-profile-info">
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
        )
    }   
}


Article.propTypes = {
    author: PropTypes.object.isRequired,
    missedArticle: PropTypes.bool.isRequired,
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
