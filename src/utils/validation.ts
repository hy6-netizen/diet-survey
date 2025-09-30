export const validateName = (name: string): boolean => {
  const nameRegex = /^[가-힣a-zA-Z]{1,10}$/;
  return nameRegex.test(name);
};

export const validateBirthYear = (year: string): boolean => {
  const yearRegex = /^\d{4}$/;
  if (!yearRegex.test(year)) return false;

  const yearNum = parseInt(year);
  const currentYear = new Date().getFullYear();
  return yearNum >= 1900 && yearNum <= currentYear;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^01[0-9]\d{8}$/;
  return phoneRegex.test(phone);
};

export const validateArray = (arr: string[]): boolean => {
  return arr.length > 0;
};

export const validateConsent = (consent: boolean): boolean => {
  return consent === true;
};