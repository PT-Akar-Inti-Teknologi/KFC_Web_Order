import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export const useLocalSwitcher = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();
  const router = useRouter();
  const onSelect = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };

  return({
    isPending,
    localeActive,
    open,
    setOpen,
    action: {
      onSelect
    }
  })
}