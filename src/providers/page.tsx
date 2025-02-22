import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { QUESTIONS_COUNT } from "./quiz";

interface IPage {
  pageNb: number;
  nextPage: () => void;
  toFirstQ: () => void;
  isStartPage: boolean;
  isEndPage: boolean;
}

const PageContext = createContext<IPage | null>(null);

interface IPageProviderProps {
  children: ReactNode;
}

export default function PageProvider({ children }: IPageProviderProps) {
  const [pageNb, setPageNb] = useState(0);

  const toFirstQ = useCallback(() => {
    setPageNb(1);
  }, []);

  const nextPage = useCallback(() => {
    setPageNb((current) => current + 1);
  }, []);

  const isStartPage = pageNb === 0;
  const isEndPage = pageNb === QUESTIONS_COUNT + 1;

  return (
    <PageContext.Provider
      value={{ pageNb, nextPage, toFirstQ, isStartPage, isEndPage }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("usePage should be used inside of PageProvider");
  }

  return context;
}
