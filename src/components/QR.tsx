import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import IQR from "./IQR";

export default function QR() {
  return (
    <div className="hidden sm:block">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 z-20"
            size="icon"
            variant="outline"
          >
            <IQR />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="items-center">
            <AlertDialogTitle>امسح لزيارة الموقع</AlertDialogTitle>
            <AlertDialogDescription>
              <a
                href="https://foundingday.safhah.io/"
                target="_blank"
                dir="ltr"
                className="font-sans text-foreground underline"
              >
                https://foundingday.safhah.io/
              </a>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center">
            <img className="w-full h-auto max-w-xs" src="/qr.png" alt="" />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
