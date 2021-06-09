export type authenticationData = {
   id: string,
   role: string
}

export type userCredentials = {
   email: string
   password: string
}

export type userPersonalInfo = {
   name: string
   nickname: string
}

export enum userRole {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {
   id: string, 
   email: string, 
   name: string,
    nickname: string, 
   password: string, 
   role: userRole,
}

export type userAddress = {
   id: string
   PostalCode: number
   street: string | undefined
   number: number
   neighborhood: string | undefined
   city: string | undefined
   state: string | undefined
   user_id: string
}

export type address = {
   street: string,
   neighborhood: string,
   city: string,
   state: string
}