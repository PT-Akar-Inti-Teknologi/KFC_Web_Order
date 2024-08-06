import CoffeeIcon from "@/components/icons/icon-collections/category-icons/CoffeeIcon";
import DessertIcon from "@/components/icons/icon-collections/category-icons/DessertIcon";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";


const othersCategoryData = [
  {
    name: "Coffee",
    icon: <CoffeeIcon/>,
    to: "?category=coffee",
  },
  {
    name: "Dessert",
    icon: <DessertIcon/>,
    to: "?category=dessert",
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