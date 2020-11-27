import React from 'react';

import TimerImage from 'static/timer.svg';
import GrowthImage from 'static/growth.svg';
import CommunityImage from 'static/community.svg';
import RupeesImage from 'static/rupees.svg';
import OfferImage from 'static/offer.svg';

import './styles.scss';
import { Link } from 'react-router-dom';

const CourseCard = ({
  title,
  subTitle,
  level,
  gradeRange,
  happyStudents,
  hours,
  sessions,
  isWeekend,
  isWeekday,
  price,
  discount,
  learnMoreLink,
}) => (
  <div className="course-card">
    <div className="card-image" />
    <div className="card-body">
      <div className="title">
        <h6>
          {title}
        </h6>
        <h6>
          {subTitle}
        </h6>
      </div>

      <div className="sub-heading">
        <span>
          LEVEL <b>{level}</b>
        </span>
        <span>
          GRADES <b>{gradeRange}</b>
        </span>
      </div>

      <div className="details">
        <div className="detail">
          <img alt="" src={GrowthImage} />
          <p><b>{parseFloat(happyStudents / 1000)}k</b> Happy Students</p>
        </div>
        <div className="detail">
          <img alt="" src={TimerImage} />
          <p><b>{hours} Hours</b> over <span>{sessions}</span> Sessions</p>
        </div>
        <div className="detail">
          {(isWeekday || isWeekend) && <img alt="" src={CommunityImage} />}
          <p>
            {isWeekend && 'Weekend'}
            {(isWeekend && isWeekday) && ' and '}
            {isWeekday && 'Weekday'}
            {' Batches'}
          </p>
        </div>
      </div>

      <div className="price-offer">
        <div className="price">
          <img alt="" src={RupeesImage} />
          { (parseInt(discount) > 0)
            ? <div>
                <h5>{parseInt(price) - (parseInt(price) * parseInt(discount)/100)}</h5>
                <h4>{price}</h4>
              </div>
            : <h5>{price}</h5>
          }
        </div>
        {
          discount && parseInt(discount) && (
            <div className="offer">
              <img alt="" src={OfferImage} />
              {`${discount}% off`}
            </div>
          )
        }
      </div>

      <div className="link">
        <Link onClick={(e) => e.preventDefault()} to={learnMoreLink}>
          LEARN MORE
        </Link>
      </div>
    </div>
  </div>
)

export default CourseCard;