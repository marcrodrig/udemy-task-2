import React from 'react'
import { StudentData } from '../components/StudentGrade/interface';

export const StudentGradeContext = React.createContext<StudentData[]>([]);