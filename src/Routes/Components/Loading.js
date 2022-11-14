import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from '../../Images/spinner.gif';

function Loading() {
    return (
        <Card>
            <Card.Img src={Spinner} alt="Loading spinner" />
            <Card.ImgOverlay />
        </Card>
    )
}

export default Loading;