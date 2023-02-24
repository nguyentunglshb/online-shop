const isClient = typeof window !== "undefined";

export const ACCESS_TOKEN = "access_token";

export const getStoredAuth = <T>(): T | null => {
  if (!isClient) return null;
  const storedAuth = localStorage.getItem(ACCESS_TOKEN);
  return storedAuth ? (JSON.parse(storedAuth) as T) : null;
};

export const getAvatar = <T>(): T | undefined => {
  if (!isClient) return undefined;
  const avatarUrl = localStorage.getItem("avatarUrl");
  return avatarUrl ? (JSON.parse(avatarUrl) as T) : undefined;
};

export const clearStoredAuth = () => {
  if (!isClient) return;

  localStorage.clear();
};

export const setLocalStorage = <T>(key: string, data: T) => {
  if (!isClient) return;
  localStorage.setItem(key, JSON.stringify(data));
};
