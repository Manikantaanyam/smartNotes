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
