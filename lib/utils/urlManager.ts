import queryString from "query-string";
import { SearchParams } from "@/types";

const urlManager = (params: string, change: Partial<SearchParams>) => {
  const param = queryString.parse(params);
  Object.assign(param, change);
  return queryString.stringify(param, {
    skipEmptyString: true,
  });
};

export default urlManager;
