import { StateCreator } from "zustand";

export interface TestSlice {
    text: string;
    setText: (text: string) => void;
}

export const createTestSlice: StateCreator<TestSlice, [], [], TestSlice> = (set) => ({
    text: '',
    setText: (text) => set((state) => ({ text }))
})