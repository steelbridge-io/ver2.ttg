import React from "react";

const TeamCard = ({ data }) => {
  const { image, name, designation, url, socials } = data;
  return (
    <div className="singleTM">
      <div className="tm_img">
        <img src={image} alt={name} />
        <div className="tm_overlay">
          <div className="team_social">
            {socials.map(({ name, url }, index) => (
              <a key={index} href={url}>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="detail_TM">
        <a href={url}>
        <h5>{name}</h5>
        <h6>{designation}</h6>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
