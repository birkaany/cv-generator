"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormData } from "@/app/data-provider";

const Panel = () => {
  const { formData, updateFormData } = useFormData();
  const [professionalExperiences, setProfessionalExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [newEducation, setNewEducation] = useState({
    title: "",
    subtitle: "",
  });
  const [newExperience, setNewExperience] = useState({
    title: "",
    subtitle: "",
  });
  const addNewExperience = () => {
    updateFormData({
      ...formData,
      professionalExperiences: [
        ...formData.professionalExperiences,
        {
          d: uuidv4(),
          title: newExperience.title,
          subtitle: newExperience.subtitle,
        },
      ],
    });
    setProfessionalExperiences((prevValues) => [
      ...prevValues,
      {
        id: uuidv4(),
        title: newExperience.title,
        subtitle: newExperience.subtitle,
      },
    ]);

    setNewExperience({
      title: "",
      subtitle: "",
    });
  };
  const addNewEducation = () => {
    updateFormData({
      ...formData,
      educations: [
        ...formData.educations,
        {
          d: uuidv4(),
          title: newEducation.title,
          subtitle: newEducation.subtitle,
        },
      ],
    });
    setEducations((prevValues) => [
      ...prevValues,
      {
        id: uuidv4(),
        title: newEducation.title,
        subtitle: newEducation.subtitle, // Change newExperience.subtitle to newEducation.subtitle
      },
    ]);

    setNewEducation({
      title: "",
      subtitle: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({
      ...formData,
      professionalExperiences: professionalExperiences,
      educations: educations,
    });
    console.log(formData);
  };
  return (
    <aside className="p-3">
      <form onSubmit={handleSubmit}>
        <Accordion className="w-full" collapsible type="single">
          <AccordionItem className="accordion" value="personal-info">
            <AccordionTrigger>Profil</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <Input
                  id="name"
                  placeholder="İsim"
                  value={formData.name}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  id="title"
                  placeholder="Görev"
                  value={formData.title}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                />
                <Input
                  id="address"
                  placeholder="Adres"
                  value={formData.address}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      address: e.target.value,
                    })
                  }
                />
                <Input
                  id="age"
                  placeholder="Yaş"
                  type="number"
                  value={formData.age !== 0 ? formData.age : ""}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      age: e.target.value,
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="professional-info">
            <AccordionTrigger>Kişisel bilgiler</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <Input
                  id="experience-years"
                  placeholder="Deneyim Yılı"
                  type="text"
                  value={
                    formData.experienceYears !== ""
                      ? formData.experienceYears
                      : ""
                  }
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      experienceYears: e.target.value,
                    })
                  }
                />
                <Input
                  id="salary-expectation"
                  placeholder="Maaş Beklentisi"
                  type="number"
                  value={
                    formData.salaryExpectation !== 0
                      ? formData.salaryExpectation
                      : ""
                  }
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      salaryExpectation: e.target.value,
                    })
                  }
                />
                <Input
                  id="notice-period"
                  placeholder="İhbar Süresi"
                  type="text"
                  value={
                    formData.noticePeriod !== 0 ? formData.noticePeriod : ""
                  }
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      noticePeriod: e.target.value,
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="personality">
            <AccordionTrigger>Kişilik</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <Textarea
                  id="personality-color"
                  placeholder="Karakter Rengi"
                  value={formData.personalityColor}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      personalityColor: e.target.value,
                    })
                  }
                />
                <Textarea
                  id="personality-type"
                  placeholder="Kişilik Tipi"
                  value={formData.personalityType}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      personalityType: e.target.value,
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="experience">
            <AccordionTrigger>Tecrübe</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {professionalExperiences.map((experience, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 justify-between border p-2"
                  >
                    <div>
                      <h3 className="font-bold">{experience.title}</h3>
                      <h4>{experience.subtitle}</h4>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          const updatedExperiences =
                            professionalExperiences.filter(
                              (prev) => prev.id !== experience.id
                            );
                          setProfessionalExperiences(updatedExperiences);
                          updateFormData({
                            ...formData,
                            professionalExperiences: [...updatedExperiences],
                          });
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Dialog>
                <DialogTrigger className="bg-black text-white p-2 rounded-sm">
                  Ekle
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Tecrübe ekle</DialogTitle>
                    <Input
                      id="title"
                      placeholder="Şirket Adı"
                      type="Text"
                      value={newExperience.title}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          title: e.target.value,
                        })
                      }
                    />
                    <Input
                      id="subtitle"
                      placeholder="Diğer bilgiler"
                      type="Text"
                      value={newExperience.subtitle}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          subtitle: e.target.value,
                        })
                      }
                    />
                    <Button onClick={addNewExperience}>Ekle</Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="education">
            <AccordionTrigger>Education</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {educations.map((education, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 justify-between border p-2"
                  >
                    <div>
                      <h3 className="font-bold">{education.title}</h3>
                      <h4>{education.subtitle}</h4>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          const updatedEducations = educations.filter(
                            (prev) => prev.id !== education.id
                          );
                          setEducations(updatedEducations);
                          updateFormData({
                            ...formData,
                            educations: [...updatedEducations],
                          });
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Dialog>
                <DialogTrigger className="bg-black text-white p-2 rounded-sm">
                  Ekle
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Eğitim Ekle</DialogTitle>
                    <Input
                      id="title"
                      placeholder="Eğitim Adı"
                      type="Text"
                      value={newEducation.title}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          title: e.target.value,
                        })
                      }
                    />
                    <Input
                      id="subtitle"
                      placeholder="Diğer bilgiler"
                      type="Text"
                      value={newEducation.subtitle}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          subtitle: e.target.value,
                        })
                      }
                    />
                    <Button onClick={addNewEducation}>Ekle</Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="languages">
            <AccordionTrigger>Diller</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="languages-known"
                placeholder="Bildiği diller"
                value={formData.languages}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    languages: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="skills">
            <AccordionTrigger>Yetenekler</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="skills"
                placeholder="Yetenekler"
                value={formData.skills}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    skills: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="hobbies">
            <AccordionTrigger>İlgi Alanları</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="hobbies"
                placeholder="Hobileri"
                value={formData.hobbies}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    hobbies: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="note">
            <AccordionTrigger>Not</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="additional-notes"
                placeholder="Ek notlar ya da yorumlar"
                value={formData.note}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    note: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </aside>
  );
};

export default Panel;
