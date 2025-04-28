
// Validation functions for forms

/**
 * Validates a roll number to ensure it follows the format like 23N71A0123
 * @param roll - The roll number to validate
 * @returns boolean indicating if the roll number is valid
 */
export const validateRollNumber = (roll: string): boolean => {
  // Check if roll number matches pattern: 2 digits + N7 + 1 digit + 1 letter + 4 digits
  const rollPattern = /^\d{2}N7\d[A-Z]\d{4}$/;
  return rollPattern.test(roll);
};

/**
 * Validates a password to ensure it meets security requirements
 * @param password - The password to validate
 * @returns boolean indicating if the password is valid
 */
export const validatePassword = (password: string): boolean => {
  // Password should be at least 8 characters and include at least one number and one letter
  return password.length >= 8 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password);
};

/**
 * Validates a name to ensure it's not empty and contains only letters and spaces
 * @param name - The name to validate
 * @returns boolean indicating if the name is valid
 */
export const validateName = (name: string): boolean => {
  return name.trim().length > 0 && /^[a-zA-Z\s]+$/.test(name);
};

/**
 * Returns an error message for an invalid roll number
 * @returns error message string
 */
export const getRollNumberErrorMessage = (): string => {
  return "Roll number must follow format: 23N71A0123";
};

/**
 * Returns an error message for an invalid password
 * @returns error message string
 */
export const getPasswordErrorMessage = (): string => {
  return "Password must be at least 8 characters with at least one number and one letter";
};

/**
 * Returns an error message for an invalid name
 * @returns error message string
 */
export const getNameErrorMessage = (): string => {
  return "Please enter a valid name (letters and spaces only)";
};
