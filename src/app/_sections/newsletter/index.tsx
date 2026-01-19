"use client";
import * as React from "react";
import { Section } from "@/common/layout";
import { Input } from "@/common/input";
import { Button } from "@/common/button";

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to submit email
  };

  return (
    <Section
      className="bg-surface-secondary dark:bg-dark-surface-secondary py-10!"
      container="full"
    >
      <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between items-center">
        <div className="flex flex-1 flex-col items-start gap-1">
          <h5 className="text-xl font-medium lg:text-2xl">Subscribe to our newsletter</h5>
          <p className="text text-text-tertiary dark:text-dark-text-tertiary lg:text-lg">
            Get the latest news and updates from Kmwebdesign.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 w-full lg:w-auto">
          {submitted ? (
             <p className="text-green-600 font-medium">Thanks for subscribing!</p>
          ) : (
             <>
                <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full lg:w-80"
                />
                <Button type="submit" intent="primary">Subscribe</Button>
             </>
          )}
        </form>
      </div>
    </Section>
  );
}
