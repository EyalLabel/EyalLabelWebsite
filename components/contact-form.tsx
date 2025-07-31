"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          subject: "",
          name: "",
          email: "",
          message: "",
        });
        
        // Close modal after a short delay
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
        console.error("Error:", result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Button
        color="primary"
        variant="flat"
        size="sm"
        onPress={() => setIsOpen(true)}
        className="hidden sm:flex"
      >
        Contact Me
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 p-4">
          <div className="min-h-full flex items-center justify-center">
            <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Contact Me</h2>
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setIsOpen(false)}
                    className="text-default-500"
                  >
                    ✕
                  </Button>
                </div>
                
                {submitStatus === "success" && (
                  <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    Message sent successfully! Thank you for contacting me.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
                
                <div className="space-y-6">
                  <Input
                    label="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    isRequired
                    labelPlacement="outside"
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      labelPlacement="outside"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      isRequired
                    />
                    
                    <Input
                      label="Your Email"
                      type="email"
                      labelPlacement="outside"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      isRequired
                      classNames={{
                        label: "text-default-600 mb-2",
                        input: "text-foreground py-3",
                        inputWrapper: "py-2",
                      }}
                    />
                  </div>
                  
                  <textarea
                    className="w-full min-h-[120px] px-3 py-2 border border-default-300 rounded-lg bg-background text-foreground placeholder:text-default-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell me about your project, collaboration opportunity, or just say hello!"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex justify-end gap-3 mt-6">
                  <Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
                    Cancel
                  </Button>
                  <Button 
                    color="primary" 
                    onPress={handleSubmit}
                    isLoading={isSubmitting}
                    isDisabled={submitStatus === "success"}
                  >
                    {submitStatus === "success" ? "Sent!" : "Send Message"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 