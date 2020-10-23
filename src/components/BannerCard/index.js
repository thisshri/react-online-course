import React from 'react';

import './styles.scss';

const BannerCard = ({
  image,
  title,
  description,
  link,
  linkText,
}) => (
  <div className="banner-card">
    <img alt="" src={image}></img>
    <p>
      {title}
    </p>
    <p>
      {description}
      {link && " "}
      {
        link &&
        <a href={link}>
          {linkText}
        </a>
      }
    </p>
  </div>
)

export default BannerCard;
