import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function MemberCard({ member, handleClick }) {

    let partyString;

    if (member.party === "D") partyString = "Democrat";
    if (member.party === "R") partyString = "Republican";
    if (member.party === "ID") partyString = "Independent";

    return (
        <Col>
            <Card style={{ width: '100px', cursor: 'pointer' }} className="memberCard" onClick={handleClick}>
                <Card.Img variant="top" src={member.photo} alt={`${member.first_name} ${member.last_name}`} style={{ height: '100%', maxHeight: '100px', width: 'auto', objectFit: 'cover' }} />
                <Card.Title>{`${member.first_name} ${member.last_name}`}</Card.Title>
                <Card.Subtitle>{partyString}</Card.Subtitle>
                <Card.Link onClick={handleClick} className="stretched-link" data-id={member.id} />
            </Card>
        </Col>
    )
}

export default MemberCard;