import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface RingyLeadCaptureFormProps {
  onSubmit?: (data: { name: string; email: string; phone: string }) => void;
  className?: string;
}

export default function RingyLeadCaptureForm({ onSubmit, className }: RingyLeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <p className="text-xs text-slate-500 text-center">
          Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
        </p>
        <Button type="submit" className="w-full">
          Request Guidance
        </Button>
      </div>
    </form>
  );
}