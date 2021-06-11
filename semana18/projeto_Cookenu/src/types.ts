export type User = {
  id: string
  name: string
  email: string
  password: string
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