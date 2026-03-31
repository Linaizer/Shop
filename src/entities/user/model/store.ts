import { loginUser } from '../api'
import type { User } from './types'
import { create } from 'zustand'

interface userStoreProps {
    user: User | null
    token: string | null
    status: 'idle' | 'loading' | 'success' | 'error'
    error: string | null
    login: (username: string, password: string) => void
    logout: () => void
}

export const useUserStore = create<userStoreProps>((set) => ({
    user: null,
    token: null,
    status: 'idle',
    error: null,
    login: async (username: string, password: string) => {
        set({ status: 'loading' })
        try {
            const token = await loginUser(username, password)
            set({ token: token.token, status: 'success' })
        } catch (e) {
            set({ error: 'Login failed', status: 'error' })
        }
    },
    logout: () => {
      set({user:null, token:null, status:'idle',error:null})
    }
}))