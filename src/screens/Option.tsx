import { Button } from "@/components/ui/button";
import { IQuiz, useQuiz } from "@/providers/quiz";
import { motion } from "framer-motion";
import { useState } from "react";
import { useReward } from "react-rewards";

enum State {
  None,
  Correct,
  Wrong,
}

export default function Option({
  q,
  k,
  v,
}: {
  q: IQuiz;
  k: string;
  v: string;
}) {
  const { reward: confettiReward } = useReward("confettiReward", "confetti");
  const { validate, answer } = useQuiz();
  const [state, setState] = useState<State>(State.None);

  const isCorrect = state === State.Correct;
  const isWrong = state === State.Wrong;

  const handleClick = () => {
    if (isCorrect) return;
    if (validate(q, k)) {
      confettiReward();
      setState(State.Correct);
      setTimeout(() => {
        setState(State.None);
        answer(q, k);
      }, 750);
    } else {
      setState(State.Wrong);
      setTimeout(() => {
        setState(State.None);
      }, 300);
    }
  };

  return (
    <motion.div
      animate={
        isWrong
          ? {
              x: [0, -5, 5, -5, 5, -5, 5, 0],
              y: [0, -2, 2, 2, -2, 2, -2, 0],
            }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      <Button
        className="w-full grid grid-cols-12 h-auto"
        style={{
          backgroundColor: isCorrect ? "rgb(46, 157, 46)" : "",
        }}
        disabled={isWrong}
        variant="default"
        onClick={handleClick}
      >
        <div className="col-span-1">{k}.</div>
        <div className="col-span-11">{v}</div>
      </Button>
    </motion.div>
  );
}
