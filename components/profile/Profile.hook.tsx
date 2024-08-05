import { useRouter } from "next/navigation";
import { useState, useTransition } from "react"

export const useProfile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const onSelect = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };


  return ({
    isOpen,
    setIsOpen,
    isPending,
    action: {
      onSelect
    }
  })
}