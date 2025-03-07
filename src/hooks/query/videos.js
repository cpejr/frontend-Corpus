import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getVideosByParameters,
  getVideos,
  createVideos,
  deleteVideos,
  updateVideos,
} from "../../services/endpoints";

export function useGetVideos({
  filters,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["videos", filters],
    queryFn: () => getVideos(filters),
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
