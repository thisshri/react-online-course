import React from 'react';

import CourseCard from 'components/CourseCard';
import './styles.scss'

const CourseContainer = ({
  types,
  coursesData,
}) => {
  return (
    <div className="course-container">
      <div className="buttons">
        { types.map(
            (type) => <button>{ type }</button>
          )
        }
      </div>
      <div className="header">
        <p>
          Showing {"All"} courses for {"Grade 5-8"}
        </p>
        <select>
          <option>All Courses</option>
        </select>
      </div>
      <div className="course-cards">
        {
          coursesData.map(
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
