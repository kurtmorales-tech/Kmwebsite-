"use client";
import * as React from "react";
import { Section } from "@/common/layout";
import { Input } from "@/common/input"; // Assuming Input exists
import { Button } from "@/common/button";
import { siteContent } from "@/data/content";

// Assuming textarea needs to be handled or Input supports it? 
// I'll check Input component. If not, I'll use standard textarea or minimal styling.
// Let's assume standard textarea for now.

export default function ContactPage() {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Submit logic
  };

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
        <div>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-text-secondary dark:text-dark-text-secondary text-lg mb-8">
                Ready to start your next project? Fill out the form or reach us via email or phone.
            </p>
            
            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg">Contact Info</h3>
                    <p className="text-text-tertiary">{contact.email}</p>
                    <p className="text-text-tertiary">{contact.phone}</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-text-tertiary">{contact.address}</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-text-tertiary">{contact.hours}</p>
                </div>
            </div>
        </div>

        <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-8 rounded-lg border border-border dark:border-dark-border">
            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
                    <p>We'll get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input required placeholder="Your Name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input required type="email" placeholder="john@example.com" />
                    </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Message</label>
                        <textarea 
                            required
                            className="bg-transparent border border-border dark:border-dark-border rounded-md p-3 min-h-[150px] focus:outline-accent-500"
                            placeholder="Tell us about your project..."
                        />
                    </div>
                    <Button type="submit" intent="primary" size="lg" className="mt-2">
                        Send Message
                    </Button>
                </form>
            )}
        </div>
      </div>
    </Section>
  );
}
