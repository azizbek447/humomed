import { useState } from "react";
import storage from "../utils/storage";
import { findIndex } from "lodash";

const BREADCRUMB_KEY = "BREADCRUMBS"; // appConfig o‘rniga

export const useBreadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState(() => {
    const stored = storage.get(BREADCRUMB_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const setBreadcrumb = (path, query) => {
    const newData = [{ path, query }];
    setBreadcrumbs(newData);
    storage.set(BREADCRUMB_KEY, JSON.stringify(newData));
  };

  const addBreadcrumb = (path, query) => {
    const newBreadcrumbs = [...breadcrumbs];
    const existingIndex = findIndex(newBreadcrumbs, { path });

    if (existingIndex > -1) {
      newBreadcrumbs.splice(existingIndex);
    }

    newBreadcrumbs.push({ path, query });
    setBreadcrumbs(newBreadcrumbs);
    storage.set(BREADCRUMB_KEY, JSON.stringify(newBreadcrumbs));
  };

  return { breadcrumbs, addBreadcrumb, setBreadcrumb };
};
