export const validateForm = {
  name: (value: string): string | null => {
    if (value.length < 2) return "Le nom doit contenir au moins 2 caractères";
    if (value.length > 50) return "Le nom ne peut pas dépasser 50 caractères";
    return null;
  },

  email: (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value))
      return "Veuillez entrer une adresse email valide";
    return null;
  },

  message: (value: string): string | null => {
    if (value.length < 10)
      return "Le message doit contenir au moins 10 caractères";
    if (value.length > 1000)
      return "Le message ne peut pas dépasser 1000 caractères";
    return null;
  },
};
