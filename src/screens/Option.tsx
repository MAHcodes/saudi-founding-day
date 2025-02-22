import { Button } from "@/components/ui/button";
import { IQuiz, useQuiz } from "@/providers/quiz";
import { motion } from "framer-motion";
import { useState } from "react";
import { useReward } from "react-rewards";

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
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (validate(q, k)) {
      answer(q, k);
      confettiReward();
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <motion.div
      animate={
        isAnimating
          ? {
              x: [0, -5, 5, -5, 5, -5, 5, 0],
              y: [0, -2, 2, 2, -2, 2, -2, 0],
            }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      <Button
        className="w-full grid grid-cols-12"
        disabled={isAnimating}
        variant="default"
        onClick={handleClick}
      >
        <div className="col-span-1">{k}.</div>
        <div className="col-span-11">{v}</div>
      </Button>
    </motion.div>
  );
}
