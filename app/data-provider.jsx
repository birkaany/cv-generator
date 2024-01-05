"use client";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext({});

export default function DataProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    address: "",
    age: 0,
    experienceYears: "",
    salaryExpectation: 0,
    noticePeriod: "",
    personalityColor: "",
    personalityType: "",
    professionalExperiences: [],
    educations: [],
    languages: "",
    skills: "",
    hobbies: "",
    note: "",
  });
  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };
  return (
    <DataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useFormData = () => {
  return useContext(DataContext);
};
