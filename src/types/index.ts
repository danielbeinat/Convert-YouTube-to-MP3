export interface ConversionResult {
  title: string;
  link: string;
}

export interface ValidationError {
  type: "url" | "invalidVideo" | "network" | "api" | "rateLimit" | "notFound";
  message: string;
}

export interface ConversionHistory {
  id: string;
  title: string;
  url: string;
  timestamp: number;
  downloadLink?: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

export interface ApiResponse {
  title: string;
  link: string;
  status?: string;
  error?: string;
}
