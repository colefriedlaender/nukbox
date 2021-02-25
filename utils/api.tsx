export type APITrack = {
  id: string;
  ImgSrc: string;
  songName: string;
  artist: string;
  audioSrc: string;
};
async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getTracks(): Promise<APITrack[]> {
  return await fetchURL<APITrack[]>("/api/tracks");
}

export async function getTrack(id: string): Promise<APITrack> {
  return await fetchURL<APITrack>(`/api/tracks/${id}`);
}
export async function deleteTrack(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}
