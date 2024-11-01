import { useState } from "react";
import axios from "axios";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (formData: ContactForm) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );
      console.log("Response:", response);
      return true;
    } catch (err: unknown) {
      console.error("Error details:", err);
      if (axios.isAxiosError(err) && err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Failed to send message");
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  return { submitContact, isLoading, error };
}
