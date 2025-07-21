import { useQuery, useMutation } from "@tanstack/react-query";
import { login, logout, refresh } from "../../services/endpoints";
import useAuthStore from "../../stores/auth";

export function useLogin({
    onSuccess = () => {},
    onError = (err) => console.error(err),
  } = {}) {
    return useMutation({
      mutationFn: login,
      onError,
      onSuccess,
    });
  }
  
  export function useLogout({
    onSuccess = () => {},
    onError = (err) => console.error(err),
  } = {}) {
    return useMutation({
      mutationFn: logout,
      onError,
      onSuccess,
    });
  }
  
  export function useRefreshToken({ onSuccess = () => {} } = {}) {
    const expireIn = useAuthStore((state) => state.auth?.expireIn);
    const clearAuth = useAuthStore((state) => state.clearAuth);
  
    const onError = () => {
      clearAuth();
    };
  
    return useQuery({
      queryKey: ['refresh'],
      queryFn: refresh,
      onError,
      onSuccess,
      refetchInterval: expireIn * 1000,
    });
  }