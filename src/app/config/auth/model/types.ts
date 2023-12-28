export interface AuthContextValue {
  token: string;
  setToken: (token: string | null) => void;
}
