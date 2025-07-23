import { useQuery } from "@tanstack/react-query";
import { getManualTranscription } from "../../services/endpoints";

export function useGetManualTranscriptions({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  id,
} = {}) {
  return useQuery({
    queryKey: ["transcription"],
    queryFn: () => getManualTranscription(id),
    onSuccess,
    onError,
  });
}
