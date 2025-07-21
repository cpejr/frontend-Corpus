//Auth.js
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set) => ({
    auth: null,
    setAuth: (accessToken) => {
      const { user,
              iat: issuedAtTimestamp,
              exp: expireAtTimestamp, } = jwtDecode(accessToken);
      
      const secureTime = 5 * 60;
      const expireIn = expireAtTimestamp - issuedAtTimestamp - secureTime;
      
      set((state) => ({
        auth: {
          ...state.auth,
          accessToken,
          user,
          expireIn,
        },
      }));
    },
    
    setUser: (user) => set((state) => ({ auth: { ...state?.auth, user }})),

    clearAuth: () => set({ auth: null }),

}));

export default useAuthStore;
