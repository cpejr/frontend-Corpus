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
  onError = (err) => console.error(err),
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
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
export function useUpdateUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSuccess,
    onError,
  });
}

export function useCreateUsers({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUser,
    onSuccess,
    onError,
  });
}

export function useForgotPassword({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: forgotPassword,
    onError,
    onSuccess,
  });
}

export function useRedefinePassword({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: redefinePassword,
    onSuccess,
    onError,
  });
}
