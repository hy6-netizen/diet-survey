export interface SurveyData {
  areas: string[];
  best_experience: string[];
  gender: string;
  name: string;
  birth_year: string;
  phone: string;
  consent: boolean;
}

export interface ValidationErrors {
  areas?: string;
  best_experience?: string;
  gender?: string;
  name?: string;
  birth_year?: string;
  phone?: string;
  consent?: string;
}

export interface QuestionConfig {
  id: keyof SurveyData;
  title: string;
  type: 'checkbox' | 'radio' | 'text' | 'tel' | 'year' | 'consent';
  options?: string[];
  required: boolean;
  errorMessage: string;
  validation?: (value: any) => boolean;
}