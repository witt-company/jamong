export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name: boolean;
  email: boolean;
  message: boolean;
}

export interface EmailJSResponse {
  status: number;
  text: string;
}