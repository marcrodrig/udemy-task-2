import React, { useState } from 'react'
import { StudentGradeContext } from '../../context/StudentGradeContext'
import Button from '../Button'
import Input from '../Input'
import Students90Percent from '../Students90Percent'
import StudentsBelow70 from '../StudentsBelow70'
import { ERROR_MESSAGE, FIELDS_CONFIG } from './constant'
import { Fields, StudentData } from './interface'

const StudentGrade : React.FC = () => {
  const [studentsGrade, setStudentsGrade] = useState<StudentData[]>([])
  const inputStudentNameRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);
  const inputGradeRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);
  const [inputStudentName , setInputStudentName ] = useState<string>('')
  const [inputGrade, setInputGrade] = useState<string>('')
  const [fieldWithError, setFieldWithError] = useState<string>('')
  const { INPUT_GRADE, INPUT_STUDENT_NAME } = FIELDS_CONFIG;

  const isNumber = (value : any) : boolean => typeof value === 'number' && !isNaN(value)
  
  const areInputsValid = () => {
    if(!inputStudentName) {
      inputStudentNameRef.current && inputStudentNameRef.current.focus();
      setFieldWithError('inputStudentName')
    }
    else if(!inputGrade || !isNumber(Number(inputGrade))) {
      inputGradeRef.current && inputGradeRef.current.focus();
      setFieldWithError('inputGrade')
    }
    return inputStudentName && inputGrade && isNumber(Number(inputGrade))
  }

  const addStudent = () => {
    if(areInputsValid()) {
      const newStudent : StudentData = {
        name: inputStudentName,
        grade: parseFloat(inputGrade)
      }
      setStudentsGrade([...studentsGrade, newStudent])
      setFieldWithError('')
      setInputStudentName('')
      setInputGrade('')
    }
  }

  const onChangeStudentName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputStudentName(event.target.value)

  const onChangeGrade = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputGrade(event.target.value)
  
  const getErrorMessage = (field: Fields) => fieldWithError === field ? ERROR_MESSAGE : ''

  return (
    <StudentGradeContext.Provider value={studentsGrade}>
      <h1>Students Grade</h1>
      <ul>
        {studentsGrade.map((student, index) => {
          return <li key={index}>{student.name} - {student.grade}</li>
        })}
      </ul>
      <Input ref={inputStudentNameRef} label={INPUT_STUDENT_NAME.label} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeStudentName(e)} value={inputStudentName} error={getErrorMessage(INPUT_STUDENT_NAME.name)} />
      <br/>
      <Input ref={inputGradeRef} label={INPUT_GRADE.label} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeGrade(e)} value={inputGrade} error={getErrorMessage(INPUT_GRADE.name)} />
      <br/>
      <Button type="primary" onClick={addStudent}>Add</Button>
      <Students90Percent />
      <StudentsBelow70 />
    </StudentGradeContext.Provider>
  )
}

export default StudentGrade
