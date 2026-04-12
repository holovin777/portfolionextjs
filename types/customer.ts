export type PositionAtWork = {
  id: number
  name: string
  nameIt: string
}

export type Company = {
  id: number
  name: string
  nameIt: string
  location: string
  locationIt: string
  website: string
}

export type WorkingExperience = {
  id: number
  positionAtWork: PositionAtWork
  company: Company
  jobDescription: string
  jobDescriptionIt: string
  startedWork: string
  finishedWork: string | null
}

export type EducationalInstitution = {
  id: number
  name: string
  nameIt: string
  studyPlace: string
  location: string | null
  locationIt: string | null
  website: string
}

export type Course = {
  id: number
  name: string
}

export type Qualification = {
  id: number
  educationalInstitution: EducationalInstitution
  academicDegree: string | null
  faculty: string | null
  facultyIt: string | null
  department: string | null
  departmentIt: string | null
  speciality: string | null
  specialityIt: string | null
  course: Course | null
  startedStudying: string | null
  finishedStudying: string | null
}

export type Social = {
  id: number
  title: string
  link: string
  imageLink: string | null
  description: string
}

export type Customer = {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  birthday: string
  email: string
  residence: string
  residenceIt: string
  website: string
  blog: string
  drivingLicense: string
  protectedCategory: boolean
  workingExperiences: WorkingExperience[]
  qualifications: Qualification[]
  socials: Social[]
  desiredProfession: string | null
  description: string
  descriptionIt: string | null
  photoUrl: string | null
}
