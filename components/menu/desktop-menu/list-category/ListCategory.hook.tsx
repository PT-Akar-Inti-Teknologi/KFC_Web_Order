import AlacarteIcon from "@/components/icons/icon-collections/category-icons/AlacarteIcon";
import BreakfastIcon from "@/components/icons/icon-collections/category-icons/BreakfastIcon";
import ComboIcon from "@/components/icons/icon-collections/category-icons/Combolcon";
import DrinksIcon from "@/components/icons/icon-collections/category-icons/DrinksIcon";
import KidsMealIcon from "@/components/icons/icon-collections/category-icons/KidsMealIcon";
import OthersIcon from "@/components/icons/icon-collections/category-icons/OthersIcon";
import SpecialIcon from "@/components/icons/icon-collections/category-icons/SpecialIcon";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { CategoryModel } from "../DesktopMenu.types";
import OthersCategory from "../others-category/OthersCategory";
export const useListCategory = () => {
  const t = useTranslations("Category");

  const categoryData: CategoryModel[] = [
    {
      name: t("special"),
      icon: <SpecialIcon />,
      to: "?category=special",
    },
    {
      name: t("breakfast"),
      icon: <BreakfastIcon />,
      to: "?category=breakfast",
    },
    {
      name: t("combo"),
      icon: <ComboIcon />,
      to: "?category=combo",
    },
    {
      name: t("alacarte"),
      icon: <AlacarteIcon />,
      to: "?category=alacarte",
    },
    {
      name: t("drinks"),
      icon: <DrinksIcon />,
      to: "?category=drinks",
    },
    {
      name: t("kidsMeal"),
      icon: <KidsMealIcon />,
      to: "?category=kidsMeal",
    },
    {
      name: t("others"),
      icon: <OthersIcon />,
      to: "?category=others",
    },
  ];

  const renderCategoryItem = (item: CategoryModel, index: number) => {
    // last item
    if (index === categoryData.length - 1) {
      return (
        <li key={item.name} className="flex items-center px-8">
          <OthersCategory title={item.name} icon={item.icon} />
        </li>
      );
    }

    return (
      <li key={item.name}>
        <Link
          href="/"
          className="flex px-8 space-x-2 items-center border-r-2 border-neutral-200"
        >
          {item.icon}
          <span className="text-lg mb-1 ">{item.name}</span>
        </Link>
      </li>
    );
  };

  return {
    categoryData,
    actions: {
      renderCategoryItem,
    },
  };
};
