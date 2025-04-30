import React from 'react'


const ReusableCard = (props) => {

    const { imageurl,cardTitle,cardText } = props;
  return (
    <div>
        <img src={imageurl} alt={cardTitle} />

        <div className="">
            <h2>{cardTitle}</h2>
        </div>
    </div>
  )
}

export default ReusableCard