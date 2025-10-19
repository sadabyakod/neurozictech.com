// Chat-related types
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isEmailForm?: boolean;
}

export interface ChatResponse {
  response: string;
  timestamp: string;
  suggestions?: string[];
  showEmailForm?: boolean;
}

export interface ChatBotProps {
  className?: string;
  theme?: 'light' | 'dark';
  primaryColor?: string;
}

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ChatApiRequest {
  message: string;
  timestamp?: string;
  sessionId?: string;
}

export interface ChatApiResponse {
  response: string;
  timestamp: string;
  suggestions?: string[];
  sessionId?: string;
}