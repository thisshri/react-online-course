import React from 'react';
import './styles.scss';

import GroupImg from 'static/group-40.svg';
import HomeImg from 'static/home.svg';
import MedalImg from 'static/medal.svg';
import TabletImg from 'static/tablet.svg';

import BannerCard from 'components/BannerCard';

const CampK12 = () => { 
  return (
    <div className="online-courses">
      <h1>
        ONLINE COURSES
      </h1>
      <div>
        <BannerCard
          image={GroupImg}
          title="Learn interactively."
          description="LIVE online sessions with our expert mentors."
          link="www.google.com"
          linkText="See a demo."
        />
        <BannerCard
          image={HomeImg}
          title="Learn from anywhere"
          description="Convenience and safety for you and your child."
        />
        <BannerCard
          image={MedalImg}
          title="Learn from the pioneers."
          description="We've been teaching kids to code since 2010."
          link="www.google.com"
          linkText="Read more."
        />
        <BannerCard
          image={TabletImg}
          title="Learn by doing."
          description="100% project-based curriculum. Solve real-world problems."
      />
      </div>
      <button>
        Book a free trial
      </button>
    </div>
  )
};

export default CampK12;
