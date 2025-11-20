// MinistryCard.tsx
import React from "react";

interface MinistryCardProps {
  imgSrc: string;
  altText: string;
  iconClass: string;
  title: string;
  description: string;
  link: string;
  aosDelay: number;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ imgSrc, altText, iconClass, title, description, link, aosDelay }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay={aosDelay}>
      <a href={link} className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100">
        <img src={imgSrc} alt={altText} className="img-fluid rounded-top-3" />
        <div className="card-body">
          <i className={`${iconClass} feature-icon mb-3`}></i>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <span className="btn btn-sm btn-outline-primary mt-3">
            Learn More <i className="fas fa-arrow-right ms-2"></i>
          </span>
        </div>
      </a>
    </div>
  );
};

export default MinistryCard;
