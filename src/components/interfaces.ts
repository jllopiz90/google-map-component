export interface Coordinates {
  lat: number | null;
  lng: number | null;
}

export interface CoordinatesObject {
  coordinates?: Coordinates;
  success: boolean;
  error?: string;
}

export type MapType = "roadmap" | "satellite" | "hybrid" | "terrain";
