import { CreateType } from "@prisma/client";
import queryString from "query-string";
type SearchParams = {
  page: string;
  type: CreateType | "all";
  term: string;
};

const urlManager = (params: string, change: Partial<SearchParams>) => {
  const param = queryString.parse(params);
  Object.assign(param, change);
  return queryString.stringify(param, {
    skipEmptyString: true,
  });
};

export default urlManager;
