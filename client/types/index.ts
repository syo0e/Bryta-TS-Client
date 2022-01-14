export type Example = string;

export interface LoginResponse {
  token: string;
  isNewUSer: boolean;
}

export interface Actor {
  id: number;
  name: string;
  profileImageUrl: string;
  company: string;
  bodySize: string;
  debut: string;
}
