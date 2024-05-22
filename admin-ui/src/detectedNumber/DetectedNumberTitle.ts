import { DetectedNumber as TDetectedNumber } from "../api/detectedNumber/DetectedNumber";

export const DETECTEDNUMBER_TITLE_FIELD = "id";

export const DetectedNumberTitle = (record: TDetectedNumber): string => {
  return record.id?.toString() || String(record.id);
};
