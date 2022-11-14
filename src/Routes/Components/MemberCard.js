import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './MemberCard.css';


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
        <Col xs={colSize} md={colSize - 2} lg={colSize - 3} xl={colSize - 4}>
            <Card style={{ backgroundColor: partyColor }} className="memberCard text-center" onClick={handleClick}>
                <Card.Img variant="top" src={member.photo} alt={`Picture of ${member.first_name} ${member.last_name} - broken :C`} />
                <Card.Title>{`${member.first_name} ${member.last_name}`}</Card.Title>
                <Card.Subtitle>{partyString}</Card.Subtitle>
                <Card.Link onClick={handleClick} className="stretched-link" data-id={member.id} />
            </Card>
        </Col>
    )
}

export default MemberCard;