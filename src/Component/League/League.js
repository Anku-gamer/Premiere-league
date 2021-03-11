import React from 'react';
import { Card, CardColumns, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './League.css'


const League = (props) => {
    const {strTeam , strSport ,idTeam , strTeamBadge} = props.league;
    
    const badgeStyle ={
        height : '100px',
        weight : '50px'
    }
    const cardStyle = {
        paddingBottom : '10px',
        marginLeft: '50px',
        padding : '2rem',
        display : 'd-flex flex-row',
        textAlign : 'center',
        
    }
    return (
        <div className="grid-container">
        <Container style={cardStyle}>
            <Row>
            <Col>
            <Card> 
            <Card.Body>
            <Card.Title><img style ={badgeStyle} src={strTeamBadge} alt=""/></Card.Title>
           <Card.Text>
           <h3>{strTeam}</h3> 
           <p>Sports:{strSport}</p>
           </Card.Text>
            </Card.Body>
            <Card.Footer>
            <button variant="outline-primary"><Link to={`/team/${idTeam}`}>Know more</Link></button>
            </Card.Footer>
            </Card>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default League;