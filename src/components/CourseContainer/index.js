import React, { useState } from 'react';

import CourseCard from 'components/CourseCard';
import './styles.scss'

const CourseContainer = ({
  gradeRanges,
  coursesData,
}) => {
  const [grade, setGrade] = useState(gradeRanges[1]);

  return (
    <div className="course-container">
      <div className="buttons">
        { gradeRanges.map(
            (type) => (
              <button
                className={type === grade && 'active'}
                onClick={() => setGrade(type)}
              >
                { `Grade ${type}` }
              </button>
            )
          )
        }
      </div>
      <div className="header">
        <p>
          Showing <b>{"All"}</b> courses for <b>{`Grade ${grade}`}</b>
        </p>
        <select>
          <option>All Courses</option>
        </select>
      </div>
      <div className="course-cards">
        {
          coursesData.filter(course => course.gradeRange === grade).map(
            (course) => (
              <CourseCard
                title={course.title}
                subTitle={course.subTitle}
                level={course.level}
                gradeRange={course.gradeRange}
                happyStudents={course.happyStudents}
                hours={course.hours}
                sessions={course.sessions}
                isWeekday={course.isWeekday}
                isWeekend={course.isWeekend}
                batchInformation={course.batchInformation}
                price={course.price}
                discount={course.discount}
                learnMoreLink={course.learnMoreLink}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default CourseContainer;
