import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sanitizeInput, validateEmail, validateName, validateMessage, rateLimiter } from "@/lib/security";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Hidden field for spam protection
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Honeypot check (if filled, it's likely a bot)
    if (formData.honeypot) {
      toast({
        title: "Submission Failed",
        description: "Please try again.",
        variant: "destructive"
      });
      return false;
    }

    // Validate and sanitize inputs
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedMessage = sanitizeInput(formData.message);

    if (!validateName(sanitizedName)) {
      newErrors.name = "Please enter a valid name (2-50 characters, letters only)";
    }

    if (!validateEmail(sanitizedEmail)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validateMessage(sanitizedMessage)) {
      newErrors.message = "Message must be between 10-1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!rateLimiter.canSubmit()) {
      const timeRemaining = Math.ceil(rateLimiter.getTimeUntilNextSubmission() / 1000);
      toast({
        title: "Too Many Requests",
        description: `Please wait ${timeRemaining} seconds before submitting again.`,
        variant: "destructive"
      });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = name !== 'honeypot' ? sanitizeInput(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "uday.singh240818@gmail.com",
      link: "mailto:uday.singh240818@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-81268-52998",
      link: "tel:+918126852998"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "udaysingh2626",
      link: "https://linkedin.com/in/udaysingh2626"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "singhuday26",
      link: "https://github.com/singhuday26"
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "udaysingh2408",
      link: "https://leetcode.com/udaysingh2408"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            Let's Connect
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, collaborations, 
                  or just having a conversation about data science and technology. 
                  Feel free to reach out!
                </p>
              </div>
              
              {/* Contact Cards - Center aligned grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="card-professional hover-lift text-center">
                    <a 
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block p-2"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{contact.label}</h4>
                          <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                        </div>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-professional">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot field for spam protection - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={50}
                    className={`w-full ${errors.name ? 'border-destructive' : ''}`}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    className={`w-full ${errors.email ? 'border-destructive' : ''}`}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={1000}
                    className={`w-full ${errors.message ? 'border-destructive' : ''}`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000 characters
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-contact w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;