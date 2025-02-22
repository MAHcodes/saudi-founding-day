import { useQuiz } from "@/providers/quiz";
import Question from "./Question";
import { usePage } from "@/providers/page";
import { Progress } from "@/components/ui/progress";

export default function Questions() {
  const { questions, QUESTIONS_COUNT } = useQuiz();
  const { pageNb } = usePage();

  return (
    <div className="flex flex-col gap-4">
      <div>
        {questions.map(
          (q, idx) => idx + 1 === pageNb && <Question key={q.question} q={q} />,
        )}
      </div>
      <div />
      <Progress value={((pageNb - 1) / QUESTIONS_COUNT) * 100} />
      <div className="flex items-center justify-center">
        {pageNb - 1}
        /5
      </div>
    </div>
  );
}
