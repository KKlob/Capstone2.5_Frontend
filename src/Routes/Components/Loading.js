import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from '../../Images/spinner.gif';

function Loading() {

    // Generic loading component. Currently just loads a spinner gif. Could use a touch-up to allow re-sizing based on where it's loading
    return (
        <Card>
            <Card.Img src={Spinner} alt="Loading spinner" />
            <Card.ImgOverlay />
        </Card>
    )
}

export default Loading;