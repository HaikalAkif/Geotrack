import { StateCreator } from "zustand";

export interface UserSlice {
    loggedIn: boolean;
    user: UserDetail;
    setUser: (user: UserDetail) => void;
    logout: () => void;
}

export interface UserDetail {
    username: string;
    bio: string;
    phoneNumber: string;
    email: string;
    bannerPicture: string;
    profilePicture: string;
}

const userInitialState: UserDetail = {
    username: '',
    bio: '',
    phoneNumber: '',
    email: '',
    bannerPicture: '',
    profilePicture: '',
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
    loggedIn: false,
    user: userInitialState,
    setUser: (user) => set((state) => ({
        loggedIn: true,
        user,
    })),
    logout: () => set((state) => ({ ...userInitialState, loggedIn: false }))
})