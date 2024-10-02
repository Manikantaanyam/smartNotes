export const setInSession = (key, value) => {
  return sessionStorage.setItem(key, value);
};

export const getItem = (key) => {
  return sessionStorage.getItem(key);
};

export const clearItem = () => {
  return sessionStorage.clear();
};
