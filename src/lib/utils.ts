import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getServerUrl = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  if (serverUrl == null) {
    throw new Error("SERVER_URL is not defined in the env");
  }
  return serverUrl;
};

export const getCommonHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

export const matchesAny = (term: string, fields: string[]): boolean => {
  return fields.some((field) => {
    const value = field.toLowerCase();
    const searchTerm = term.toLowerCase();

    return (
      value.startsWith(searchTerm) ||
      value.endsWith(searchTerm) ||
      value.includes(searchTerm)
    );
  });
};
