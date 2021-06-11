export enum USER_ROLES{
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type User = {
  id: string
  name: string
  email: string
  password: string
  role: USER_ROLES
}


export type Recipe = {
  id: string
  title: string
  description: string
  creationDate: Date
  user_id: string
}

export type Follow = {
  following: string, 
  followed: string
}