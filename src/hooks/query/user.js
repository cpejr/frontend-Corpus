import { useQuery, useMutation } from "@tanstack/react-query";

import {
  getUsers,
  deleteUser,
  updateUser,
  createUser,
  forgotPassword,
  redefinePassword,
} from "../../services/endpoints";

export function useGetUsers({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    onSuccess,
    onError,
  });
}
export function useDeleteUser({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
export function useUpdateUsers({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSuccess,
    onError,
  });
}

export function useCreateUsers({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: createUser,
    onSuccess,
    onError,
  });
}

export function useForgotPassword({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: forgotPassword,
    onError,
    onSuccess,
  });
}

export function useRedefinePassword({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: redefinePassword,
    onSuccess,
    onError,
  });
}
