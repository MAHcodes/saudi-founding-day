import data from "@/assets/data.json";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useUser } from "./user";
import { usePage } from "./page";

export const QUESTIONS_COUNT = 5;

function getQuestions(count: number) {
  return data.questions.sort(() => Math.random() - 0.5).slice(0, count);
}

function validate(q: IQuiz, a: string) {
  return a === q.correct;
}

export interface IQuiz {
  question: string;
  options: {
    [key: string]: string;
  };
  correct: string;
}

interface IQuizContext {
  QUESTIONS_COUNT: number;
  questions: IQuiz[];
  restart: () => void;
  validate: (q: IQuiz, a: string) => boolean;
  answer: (q: IQuiz, a: string) => void;
}

const QuizContext = createContext<IQuizContext | null>(null);

interface IQuizProviderProps {
  children: ReactNode;
}

export default function QuizProvider({ children }: IQuizProviderProps) {
  const { resetScore, incScore } = useUser();
  const { toFirstQ, nextPage } = usePage();
  const [questions, setQuestions] = useState<IQuiz[]>(
    getQuestions(QUESTIONS_COUNT),
  );

  const restart = useCallback(() => {
    resetScore();
    toFirstQ();
    setQuestions(getQuestions(QUESTIONS_COUNT));
  }, [resetScore, toFirstQ]);

  const answer = useCallback(
    (q: IQuiz, a: string) => {
      if (validate(q, a)) {
        incScore();
      }
      nextPage();
    },
    [incScore, nextPage],
  );

  return (
    <QuizContext.Provider
      value={{
        questions,
        QUESTIONS_COUNT,
        restart,
        answer,
        validate,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuiz should be used inside of QuizProvider");
  }

  return context;
}
