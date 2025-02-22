import { Button } from "@/components/ui/button";
import { useQuiz } from "@/providers/quiz";
import { useUser } from "@/providers/user";

function End() {
  const { user } = useUser();
  const { restart } = useQuiz();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-center">
        كفوو يا &nbsp;
        {user.name}
        🫡
      </h2>
      <Button onClick={restart}>إلعب أسئلة جديدة</Button>
    </div>
  );
}

export default End;
