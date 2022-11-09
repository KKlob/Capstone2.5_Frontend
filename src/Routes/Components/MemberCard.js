import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function MemberCard({ member, handleClick, colSize }) {

    let partyString;
    let partyColor;

    if (member.party === "D") {
        partyString = "Democrat";
        partyColor = "LightBlue";
    } else if (member.party === "R") {
        partyString = "Republican";
        partyColor = "LightCoral";
    }
    else if (member.party === "ID") {
        partyString = "Independent";
        partyColor = "LightGreen";
    }

    return (
        <Col xs={colSize} style={{ marginTop: '10px' }}>
            <Card style={{ height: '220px', width: 'auto', cursor: 'pointer', paddingTop: '10px', paddingBot: '10px', backgroundColor: partyColor }} className="memberCard text-center" onClick={handleClick}>
                <Card.Img variant="top" src={member.photo} alt={`${member.first_name} ${member.last_name}`} style={{ height: '100%', maxHeight: '150px', width: 'auto', objectFit: 'contain' }} />
                <Card.Title style={{ fontSize: '20px' }}>{`${member.first_name} ${member.last_name}`}</Card.Title>
                <Card.Subtitle>{partyString}</Card.Subtitle>
                <Card.Link onClick={handleClick} className="stretched-link" data-id={member.id} />
            </Card>
        </Col>
    )
}

export default MemberCard;