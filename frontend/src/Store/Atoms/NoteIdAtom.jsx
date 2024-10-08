import { atom } from "recoil";

export const NoteIdAtom = atom({
  key: "NoteIdAtom",
  default: "",
});

export const clickAtom = atom({
  key: "clickAtom",
  default: "",
});

export const TitleAtom = atom({
  key: "TitleAtom",
  default: "",
});

export const ContentAtom = atom({
  key: "ContentAtom",
  default: "",
});

export const AiQuestion = atom({
  key: "AiQuestion",
  default: "",
});

export const AiAnswer = atom({
  key: "AiAnswer",
  default: "",
});

export const ActiveLink = atom({
  key: "ActiveLink",
  default: 1,
});

export const SearchAtom = atom({
  key: "SearchAtom",
  default: "",
});

export const TokenAtom = atom({
  key: "TokenAtom",
  default: null,
});
