import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getVideosByParameters,
  getVideos,
  createVideos,
  deleteVideos,
  updateVideos,
  downloadTranscript,
} from "../../services/endpoints";

export function useGetVideos({
  onSuccess = () => {},
  onError = (err) => console.error(err),
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
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: createVideos, onSuccess, onError });
}

export function useDeleteVideos({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: deleteVideos, onSuccess, onError });
}

export function useUpdateVideos({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: updateVideos, onSuccess, onError });
}
export function useGetVideosByCategoryId({
  id,
  title,
  transcription,

  onSuccess = () => {},
  onError = (err) => console.error(err),
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
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: [
      "videos",
      {
        filters,
      },
    ],
    queryFn: () =>
      getVideosByParameters({
        filters,
      }),
    onSuccess,
    onError,
  });
}
export function useDownloadTranscript({
  title,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["transcript", title],
    queryFn: () => downloadTranscript(title),
    enabled: !!title, 
    onSuccess,
    onError,
    staleTime: Infinity,
    select: (data) => {
      return URL.createObjectURL(new Blob([data]));
    },
  });
}