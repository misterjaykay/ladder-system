import React from "react";

export default function Icon(props) {
    const { value } = props;
    let ratingIcon;

    if (value < 1000) {
        ratingIcon = "dminus";
    } else if (value > 999 && value < 1400) {
        ratingIcon = "d";
    } else if (value > 1399 && value < 1800) {
        ratingIcon = "dplus";
    }

    switch(ratingIcon) {
        case "dminus":
            ratingIcon = "./assets/images/ranks/d1.jpg";
            break;
        case "d":
            ratingIcon = "./assets/images/ranks/d2.jpg";
            break;
        case "dplus":
            ratingIcon = "./assets/images/ranks/d3.jpg";
            break;
        
    }

    return(
        <img src={ratingIcon} alt="rating icon"/>
    )
}