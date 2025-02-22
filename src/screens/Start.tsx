import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePage } from "@/providers/page";
import { useUser } from "@/providers/user";
import { useRef } from "react";

function Start() {
  const { nextPage } = usePage();
  const { setName } = useUser();
  const nameRef = useRef<HTMLInputElement>(null);

  const start = () => {
    const val = nameRef.current?.value.trim();
    if (!val) return;
    nextPage();
    setName(val);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-center">مرحبا أدخل إسمك للبدء!</h2>
      <Input ref={nameRef} />
      <Button onClick={start}>إبدأ</Button>
    </div>
  );
}

export default Start;
