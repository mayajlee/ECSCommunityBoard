import React from "react";

function Card({eventName, orgName, date, description, bttnLink}){
    const cardStyle= {
        fontFamily: "Trebuchet MS",
        border: '1px solid #000E54',
        borderRadius: '25px',
        width: '20%',
        margin: '15px',
        padding: '10px',
        background: '#F5F5F5'
    };

    const buttnStyle = {
        background: '#000E54',
        color: '#ffffff',
        padding: '5px',
        borderRadius: '5px'
        
    }

    return(
        <>
                <div style={cardStyle}>
                    <h2 style={{fontSize: '20px'}}>{eventName}</h2>
                    <h4 style={{color: '#F76900', }}>{orgName}</h4>
                    <h4><strong>{date}</strong></h4>
                    <p style={{fontSize: '12px'}}>{description}</p>
                    <a href={bttnLink} style={buttnStyle}>Learn More</a>
                </div>
        </>
    )
}

export default Card