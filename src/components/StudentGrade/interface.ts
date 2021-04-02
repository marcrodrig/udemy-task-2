export interface StudentData {
  name: string;
  grade: number;
}

export type Fields = 'inputGrade' | 'inputStudentName'

export interface FieldConfig {
  [field: string]: {
      name: Fields;
      label: string;
  }
}