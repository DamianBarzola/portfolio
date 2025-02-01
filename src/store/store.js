import { atom } from "nanostores";

export const languageStore = atom("es");

export const sectionStore = atom("first");

export const setLanguage = (lang) => {
  languageStore.set(lang);
};
export const setSection = (section) => {
  sectionStore.set(section);
};
