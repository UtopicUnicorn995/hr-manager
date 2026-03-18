import { create } from "zustand";

type User = {
  role: "admin" | "employee";
  // add more fields if needed
};

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
