"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";



export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <>
      {/* CTA Section before Contact */}

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header - Left aligned */}
          <div className="max-w-3xl mb-20">
            <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let&apos;s Talk About Your Future
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our team is here to answer any questions and guide you through the
              process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl">
            {/* Contact Form - Larger on left */}
            <div className="lg:col-span-2 animate-slideInLeft">
              <div className="bg-muted/30 border border-border rounded-lg p-10  [@media(max-width:500px)]:bg-white [@media(max-width:500px)]:border-0 [@media(max-width:500px)]:p-0">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your educational goals..."
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                      Thank you! We will get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slideInRight">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h3>
                <p className="text-foreground/70">
                  Available Monday to Friday, 9 AM - 6 PM
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3  bg-blue-500/10  rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-foreground/70">+977 (01)15928086</p>
                </div>
              </div>

               <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10  rounded-lg">
                 <img src = "whatsapp.png" className="w-6 h-6 text-primary"  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-foreground/70">
                   +61 433 675 841
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3   bg-blue-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <p className="text-foreground/70">chabahil@exactedunp.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10  rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Address</h4>
                  <p className="text-foreground/70">
                    Swaraswatinagar, Chabahil
                    <br />
                  </p>
                </div>
              </div>

             

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <img src = "facebook.png" className="w-5 h-5 text-primary" />
                      {/* <FaFacebookF className="w-5 h-5 text-primary" /> */}
                    {/* <Facebook className="w-5 h-5 text-primary" /> */}
                  </a>
                 
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="Instagram"
                  >
                    <img src = "insta.png" className="w-5 h-5 text-primary" />
                    {/* <Instagram className="w-5 h-5 text-primary" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
