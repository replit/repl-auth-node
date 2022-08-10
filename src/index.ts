import { Request } from 'express';

interface UserInfo {
  id?: string;
  name?: string;
  bio?: string;
  url?: string;
  profileImage?: string;
  roles?: Array<string>
  teams?: Array<string>
}

//remove header prefix and convert to camel case
function cleanHeader(headerName: string): keyof UserInfo {
  return headerName.replace("x-replit-user-", "").replace(/-(.)/g, function(_, group1) {
    return group1.toUpperCase();
  }) as keyof UserInfo
}


export const getUserInfo = (req: Request): UserInfo | null => {
  let { headers } = req
  let userInfo: UserInfo = {}

  for (let headerName of Object.keys(headers)) {
    const headerValue = (headers as any)[headerName]
    if (headerName.startsWith("x-replit-") && headerValue) {
      const cleanHeaderName: keyof UserInfo = cleanHeader(headerName)

      //check if property is meant to be an array
      if (cleanHeaderName === 'roles' || cleanHeaderName === 'teams') {
        userInfo[cleanHeaderName] = headerValue.split(',') as string & string[]
      } else {
        userInfo[cleanHeaderName] = headerValue as string & string[]
      }
    }
  }

  //check if userInfo is empty
  if (Object.keys(userInfo).length === 0 && userInfo.constructor === Object) {
    return null
  }
  return userInfo
}