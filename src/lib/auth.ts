import { getContext } from "@getcronit/pylon";

export const getUserId = () => getContext().get("userId");
