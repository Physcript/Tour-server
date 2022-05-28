

// interfaceErrorUser
export interface IEUser {
  Firstname: string,
  Lastname: string,
  Email: string,
  Password: string,
  ConfirmPassword: string 
}
export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  uid: string,
  token: string,
  role: number
}

export interface _IUser {
    firstName: string,
    lastName: string,
    email: string,
    uid: string,
    token: string,
    role: number,
    iat: any
  }
