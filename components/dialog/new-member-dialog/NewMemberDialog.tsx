import Button from "@/components/button/Button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/custom-dialog";
import { useTranslations } from "next-intl";
import NewMemberDialogIllustration from "./NewMemberDialog.illustration";

type NewMemberDialogProps = {
  open: boolean;
  onClose?: () => void;
  t?: {
    title?: string;
    description?: string;
    actionButton?: string;
  };
};

export function NewMemberDialog({
  open,
  t,
  onClose,
}: Readonly<NewMemberDialogProps>) {
  const translations = useTranslations("NewMemberDialog");
  const {
    title = translations("title"),
    description = translations("description"),
    actionButton = translations("actionButton"),
  } = t ?? {};

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-[400px] !rounded-[20px]"
        showCloseButton={false}
      >
        <DialogHeader className="hidden" hidden>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col justify-center items-center space-y-6">
          <NewMemberDialogIllustration />
          <div className="flex flex-col justify-center items-center space-y-2">
            <h5 className="text-2xl font-bold font-national2condensed uppercase text-center">
              {title}
            </h5>
            <p className="font-normal leading-6 text-neutral-500 text-center">
              {description}
            </p>
          </div>
          <Button className="w-full" variant={"primary"} onClick={onClose}>
            {actionButton}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
