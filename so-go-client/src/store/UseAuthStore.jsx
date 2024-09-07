import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      userUuid: null,
      role: null,
      setTokens: (accessToken, userUuid, role) => set({ accessToken, userUuid, role }),
      clearTokens: () => {
        set({ accessToken: null, userUuid: null, role: null });
        sessionStorage.removeItem('auth-storage');
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => sessionStorage,
    }
  )
);

export default useAuthStore;