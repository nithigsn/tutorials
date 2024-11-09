step 1 =>
npm i framer-motion clsx tailwind-merge @tabler/icons-react


step 2 =>

lib/utils

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
