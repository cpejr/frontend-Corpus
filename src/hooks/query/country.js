import { useQuery } from "@tanstack/react-query";

import {
  getCountries
} from "../../services/endpoints";


export function useGetCountries({
  filters,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["videos", filters],
    queryFn: () => getCountries(filters),
    onSuccess,
    onError,
  });
}
