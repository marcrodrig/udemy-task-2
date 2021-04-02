import React from 'react'
import { StudentGradeContext } from '../../context/StudentGradeContext'
import { StudentData } from '../StudentGrade/interface'

const Students90Percent = () => {
  return (
    <>
      <h1>Student With 90% and Above</h1>
      <ul>
      <StudentGradeContext.Consumer>
        {(value : StudentData[]) => (
          value.filter(student => student.grade >= 90)
            .map((student, index) => <li key={index}>{student.name} - {student.grade}</li>)
          )
        }
      </StudentGradeContext.Consumer>
      </ul>
    </>
  )
}

export default Students90Percent