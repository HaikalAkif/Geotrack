import create from 'zustand'
import { createTestSlice, TestSlice } from './slices/testSlice'
import { UserSlice } from './slices/userSlice'
import { createUserSlice } from './slices/userSlice'

export const useStore = create<UserSlice & TestSlice>()((...a) => ({
    ...createUserSlice(...a),
    ...createTestSlice(...a)
}))