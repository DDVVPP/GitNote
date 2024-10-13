"use server";
// eslint-disable-next-line camelcase
import { unstable_update } from "@/auth";

const revalidateSession = async () => {
  await unstable_update({});
};

export default revalidateSession;
