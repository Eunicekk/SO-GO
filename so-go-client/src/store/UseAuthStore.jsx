import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      userUuid: null,
      role: null,
      setTokens: (userUuid, role) => set({ userUuid, role }),
      clearTokens: () => {
        set({ userUuid: null, role: null });
        localStorage.removeItem('auth-storage');
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;