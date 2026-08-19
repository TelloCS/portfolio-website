import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import type { FormData } from './Contact.types';

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    phone_number: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const API_BASE = import.meta.env.VITE_API_URL || '';

      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit message. Please try again.');
      }

      return response.json();
    },
    onSuccess: () => {
      setFormData({ name: '', email: '', message: '', phone_number: '' });
    },
  });


  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    errorMessage: mutation.error instanceof Error ? mutation.error.message : 'An error occurred.',
  };
}