import React, { createContext, useContext, useState } from 'react';

interface FormData {
  firstname: string;
  lastname?: string;
  birthday: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormContextType {
  data: FormData;
  updateData: (fields: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<FormData>({
    firstname: '',
    lastname: '',
    birthday: '',
    country:'',
    city: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const updateData = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  return (
    <FormContext.Provider value={{ data, updateData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
