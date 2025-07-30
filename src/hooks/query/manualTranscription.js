import { useQuery } from "@tanstack/react-query";
import { getManualTranscription } from "../../services/endpoints";

export function useGetManualTranscriptions({
  id,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["transcription", id],
    queryFn: () => getManualTranscription(id),
    enabled: !!id,
    onSuccess,
    onError,
  });
}
