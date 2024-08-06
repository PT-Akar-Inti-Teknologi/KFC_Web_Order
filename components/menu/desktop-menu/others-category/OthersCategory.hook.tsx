import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";


const othersCategoryData = [
  {
    name: "Category 1",
    icon: <></>,
    to: "?category=category-1",
  },
  {
    name: "Category 2",
    icon: <></>,
    to: "?category=category-2",
  },
  {
    name: "Category 3",
    icon: <></>,
    to: "?category=category-3",
  },
  {
    name: "Category 4",
    icon: <></>,
    to: "?category=category-4",
  },
];

export const useOthersCategory = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const onSelect = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };

 

  return({
    isPending,
    open,
    setOpen,
    othersCategoryData,
    action: {
      onSelect
    }
  })
}