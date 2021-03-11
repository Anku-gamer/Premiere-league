import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PhotoMale from '../../Photo/male.png';
import PhotoFemale from '../../Photo/female.png';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFontAwesomeFlag,
    faFontAwesome,
    faFonticons,
    faTripadvisor,
    faFortAwesome,
    faYoutube,
    faFacebook,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import './TeamDetail.css';
  import { useMediaQuery } from 'react-responsive';
  

const TeamDetail = () => {
    const {idTeam} = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    let Photo ="";
    if(teamDetail.strGender === true){
       Photo = PhotoFemale;
    }
    else{
        Photo =  PhotoMale ;
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
    const imageStyle = {
        border : '1px solid black',
        borderRadius: '20px',
        height : '280px',
        marginLeft : '100px',
        float: 'right'
    }
    const headStyle = {
        display : 'flex',
        margin : '20px',
        padding : '20px',
        align : 'center'
    }
    const logoStyle = {
        weight : '180px',
        height : '180px',
    }
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then (res => res.json())
        .then (data => setTeamDetail(data.teams[0]));
    },[])
    return (
        <div className="body">
        
            <div>
                <img style = {logoStyle} src= {teamDetail.strTeamBadge} alt=""/>
            </div>
           
           <Jumbotron className="jumbo">
           <div style={headStyle}>
           <ul>
           <h1>{teamDetail.strTeam}</h1>
           <br/>
            <h4 >
                <FontAwesomeIcon icon={faFortAwesome}/> Established : {teamDetail.intFormedYear}</h4>
            <br/>
            <h5><FontAwesomeIcon icon={faFontAwesomeFlag}/> Stadium : {teamDetail.strStadium}</h5>
            <br/>
            <p><FontAwesomeIcon icon={faFontAwesome}/> League : {teamDetail.strLeague}</p>
            <p><FontAwesomeIcon icon={faFonticons}/> Keyword : {teamDetail.strAlternate}</p>
            <p><FontAwesomeIcon icon={faTripadvisor}/> Gender : {teamDetail.strGender}</p>
           </ul>
            <img style={imageStyle} src={Photo} alt=""/>
           </div>
           </Jumbotron>
            <div>
            
                <h5>{teamDetail.strDescriptionEN}</h5>
        
                <footer>
                <div class="social-container">
                        <h3>Follow Us On</h3>
                        <br/>
                        <a href="https://www.youtube.com/channel/UCG5qGWdu8nIRZqJ_GgDwQ-w"
                            target="_blank" className="youtube social">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/premierleague"
                            target="_blank"  className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://twitter.com/premierleague" 
                          target="_blank" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                </div>  
                </footer>
                <footer>
                    <p style={{color:"white"}}><small>@ALL RIGHTS RESERVED BY PREMIER LEAGUE</small></p>
                </footer>
            </div>
        </div>
    );
};

export default TeamDetail;