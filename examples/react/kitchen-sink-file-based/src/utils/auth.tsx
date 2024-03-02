import { createContext } from "react"

const auth: Auth = {
  status: 'loggedOut',
  username: undefined,
  login: (username: string) => {
    throw new Error("wrap component with AuthContext.Provider")
  },
  logout: () => {
    throw new Error("wrap component with AuthContext.Provider")
  },
}

export type Auth = {
  login: (username: string) => void
  logout: () => void
  status: 'loggedOut' | 'loggedIn'
  username?: string
}

export const AuthContext = createContext<Auth>(auth)
