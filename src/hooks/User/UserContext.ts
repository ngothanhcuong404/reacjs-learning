import { createContext } from "react";
import { User } from "../../../types/User";

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}
export const UserContext = createContext<UserContextType | undefined>(undefined);