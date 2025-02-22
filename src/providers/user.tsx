import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface IUser {
  name: string;
  score: number;
}

interface IUserContext {
  user: IUser,
  incScore: () => void;
  resetScore: () => void;
  setName: (name: string) => void;
}

const UserContext = createContext<IUserContext | null>(null);

interface IUserProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IUserProps) {
  const defaultUser = {
    name: "John Doe",
    score: 0,
  };

  const [user, setUser] = useState<IUser>(defaultUser);

  const incScore = useCallback(() => {
    setUser((current) => ({ ...current, score: current.score + 1 }));
  }, []);

  const resetScore = useCallback(() => {
    setUser((current) => ({ ...current, score: 0 }));
  }, []);

  const setName = useCallback((name: string) => {
    setUser((current) => ({ ...current, name }));
  }, []);

  return (
    <UserContext.Provider value={{ user, incScore, resetScore, setName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser should be used inside of UserProvider");
  }

  return context;
}
