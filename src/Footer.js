import React from "react";

const Footer = (props) =>{

    const Per= props.detail.map((i)=>{
        return(
            <div>{i.name}</div>
        )
    });
    console.log(props);
    return(
        <div>{Per}</div>
    )
}

export default Footer;
