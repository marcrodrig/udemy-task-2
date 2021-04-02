import React from 'react'
import { StudentGradeContext } from '../../context/StudentGradeContext'
import { StudentData } from '../StudentGrade/interface'

const StudentsBelow70 = () => {
  return (
    <>
      <h1>Student With 70% and Below</h1>
      <ul>
      <StudentGradeContext.Consumer>
        {(value : StudentData[]) => (
          value.filter(student => student.grade <= 70)
            .map((student, index) => <li key={index}>{student.name} - {student.grade}</li>)
          )
        }
      </StudentGradeContext.Consumer>
      </ul>
    </>
  )
}

export default StudentsBelow70