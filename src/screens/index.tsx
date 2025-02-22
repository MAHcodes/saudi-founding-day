import { usePage } from "@/providers/page";
import Start from "./Start";
import End from "./End";
import Questions from "./Questions";

function Screens() {
  const { isStartPage, isEndPage } = usePage();

  if (isStartPage) {
    return <Start />;
  }

  if (isEndPage) {
    return <End />;
  }

  return <Questions />;
}

export default Screens;
