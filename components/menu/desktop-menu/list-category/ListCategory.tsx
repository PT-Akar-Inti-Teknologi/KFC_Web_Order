import React from "react";
import { useListCategory } from "./ListCategory.hook";

function ListCategory() {
  const state = useListCategory();

  return (
    <nav>
      <ul className="flex space py-2">
        {state.categoryData.map(state.actions.renderCategoryItem)}
      </ul>
    </nav>
  );
}

export default ListCategory;
