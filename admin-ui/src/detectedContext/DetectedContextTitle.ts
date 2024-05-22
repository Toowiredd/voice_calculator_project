import { DetectedContext as TDetectedContext } from "../api/detectedContext/DetectedContext";

export const DETECTEDCONTEXT_TITLE_FIELD = "contextType";

export const DetectedContextTitle = (record: TDetectedContext): string => {
  return record.contextType?.toString() || String(record.id);
};
