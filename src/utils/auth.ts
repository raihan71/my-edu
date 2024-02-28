export const setAuthName = (name: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('name', name);
  }
};

export const getAuthName = () => {
  if (typeof window !== 'undefined') {
    const named:any = localStorage.getItem('name');
    return named;
  }
};

export const removeAuthName = () => {
  if (typeof window!== 'undefined') {
    localStorage.removeItem('name');
  }
}