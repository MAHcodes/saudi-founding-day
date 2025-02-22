import { IQuiz } from "@/providers/quiz";
import Option from "./Option";

interface IQuestionProps {
  q: IQuiz;
}

function Question({ q }: IQuestionProps) {
  return (
    <div className="flex flex-col items-stretch gap-8">
      <h2 className="text-xl text-center">{q.question}</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {Object.entries(q.options).map((opt) => (
          <Option key={opt[0]} q={q} k={opt[0]} v={opt[1]} />
        ))}
      </div>
    </div>
  );
}

export default Question;
