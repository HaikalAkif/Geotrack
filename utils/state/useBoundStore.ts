import create from 'zustand'
import { UserSlice } from './slices/userSlice'
import { createUserSlice } from './slices/userSlice'

export const useStore = create<UserSlice>()((...a) => ({
    ...createUserSlice(...a)
}))