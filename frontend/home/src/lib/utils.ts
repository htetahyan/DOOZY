import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const defaultMarginPadding="-mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24 px-3 md:px-6 lg:px-12 xl:px-18";