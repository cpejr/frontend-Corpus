import { useQuery } from "@tanstack/react-query";

import { getLanguages } from "../../services/endpoints";

export function useGetLanguages({
  filters,
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useQuery({
    queryKey: ["language", filters],
    queryFn: () => getLanguages(filters),
    onSuccess,
    onError,
  });
}
