import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getVideosByParameters,
  getVideos,
  createVideos,
  deleteVideos,
  updateVideos,
  getTranscriptionUrl,
  getVTTUrl
} from "../../services/endpoints";

export function useGetVideos({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useQuery({
    queryKey: ["videos"],
    queryFn: () => getVideos(),
    onSuccess,
    onError,
  });
}

export function useCreateVideos({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({ mutationFn: createVideos, onSuccess, onError });
}

export function useDeleteVideos({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({ mutationFn: deleteVideos, onSuccess, onError });
}

export function useUpdateVideos({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({ mutationFn: updateVideos, onSuccess, onError });
}
export function useGetVideosByCategoryId({
  id,
  title,
  transcription,

  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useQuery({
    queryKey: ["videos", { id, title, transcription }],
    queryFn: () => getVideos({ id, title, transcription }),
    onSuccess,
    onError,
  });
}
export function useGetVideosByParameters({
  filters,

  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useQuery({
    queryKey: ["videos", filters],
    queryFn: () => getVideosByParameters(filters),
    onSuccess,
    onError,
  });
}

export function useGetTranscriptionUrl({ 
  transcriptionId,
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useQuery({
    queryKey: ["transcriptionUrl", transcriptionId],
    queryFn: ()=> getTranscriptionUrl(transcriptionId),
    enabled: !!transcriptionId,
    onSuccess,
    onError
  })
}

export function useGetVTTUrl ({ videoId,
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useQuery({
    queryKey: ["vttUrl", videoId],
    queryFn: () => getVTTUrl(videoId),
    enabled: !!videoId,
    onSuccess,
    onError,
  });
}
