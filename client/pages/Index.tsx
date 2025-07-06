import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  ChevronDown,
  Download,
  Eye,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
  ArrowUp,
  Palette,
  Smartphone,
  Package,
  Share2,
  Monitor,
  Star,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react";

const skills = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "Adobe InDesign",
  "Brand Identity",
  "Logo Design",
  "Typography",
  "Color Theory",
  "UI/UX Design",
  "Print Design",
  "Digital Illustration",
];

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Logo Design",
    description:
      "Unique and memorable brand identities that capture your essence",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Branding",
    description: "Complete brand packages including guidelines and assets",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Packaging",
    description: "Eye-catching product packaging that stands out on shelves",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Social Media",
    description: "Engaging social media graphics and campaign designs",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "UI/UX",
    description: "User-centered digital experiences and interface design",
  },
];

const portfolioProjects = [
  {
    id: 1,
    title: "Bright Café Branding",
    category: "Branding",
    image: "/placeholder.svg",
    description: "Complete brand identity for a modern coffee shop",
  },
  {
    id: 2,
    title: "TechFlow Logo",
    category: "Logo",
    image: "/placeholder.svg",
    description: "Minimalist logo design for tech startup",
  },
  {
    id: 3,
    title: "Festival Poster Series",
    category: "Social",
    image: "/placeholder.svg",
    description: "Vibrant poster designs for music festival",
  },
  {
    id: 4,
    title: "EcoBox Packaging",
    category: "Packaging",
    image: "/placeholder.svg",
    description: "Sustainable packaging design for eco-friendly products",
  },
  {
    id: 5,
    title: "FoodieApp Interface",
    category: "Web",
    image: "/placeholder.svg",
    description: "Mobile app UI design for food delivery service",
  },
  {
    id: 6,
    title: "Brand Guidelines",
    category: "Branding",
    image: "/placeholder.svg",
    description: "Comprehensive brand manual for corporate client",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content:
      "Saheli transformed our brand identity completely. Her creative vision and attention to detail exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Café Owner",
    company: "Bright Café",
    content:
      "The branding package Saheli created helped us establish a strong presence in the market. Highly recommend her work!",
    rating: 5,
  },
  {
    name: "Anita Mehta",
    role: "Product Manager",
    company: "EcoBox",
    content:
      "Outstanding packaging design that perfectly captured our eco-friendly values. Professional and creative approach.",
    rating: 5,
  },
];

const categories = ["All", "Logo", "Branding", "Packaging", "Social", "Web"];

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const translations = {
    en: {
      hero: {
        greeting: "Hi, I'm",
        name: "Saheli Goswami",
        role: "Graphic Designer",
        description:
          "Creating vibrant, impactful designs that tell your story and connect with your audience.",
        portfolio: "View Portfolio",
        resume: "Download Resume",
      },
      about: {
        title: "About Me",
        description:
          "I'm a passionate graphic designer with 5+ years of experience creating memorable visual identities. I specialize in branding, logo design, and digital graphics that help businesses stand out in today's competitive market.",
        skills: "Skills & Tools",
      },
      portfolio: {
        title: "My Work",
        subtitle: "A showcase of my recent projects and creative solutions",
      },
      services: {
        title: "Services",
        subtitle: "What I can help you with",
      },
      testimonials: {
        title: "What Clients Say",
      },
      contact: {
        title: "Let's Work Together",
        subtitle:
          "Ready to bring your vision to life? Let's create something amazing together.",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        location: "Mumbai, India",
      },
      footer: {
        copyright: "© 2024 Saheli Goswami. All rights reserved.",
        darkMode: "Dark Mode",
        language: "Language",
      },
    },
    hi: {
      hero: {
        greeting: "नमस्ते, मैं हूं",
        name: "साहेली गोस्वामी",
        role: "ग्राफिक डिज़ाइनर",
        description:
          "जीवंत और प्रभावशाली डिज़ाइन बनाती हूं जो आपकी कहानी कहते हैं और आपके दर्शकों से जुड़ते हैं।",
        portfolio: "पोर्टफोलियो देखें",
        resume: "रिज्यूमे डाउनलोड करें",
      },
      about: {
        title: "मेरे बारे में",
        description:
          "मैं एक भावुक ग्राफिक डिज़ाइनर हूं जिसके पास 5+ वर्षों ��ा अनुभव है। मैं ब्रांडिंग, लोगो डिज़ाइन और डिजिटल ग्राफिक्स में विशेषज्ञ हूं।",
        skills: "कौशल और उपकरण",
      },
      portfolio: {
        title: "मेरा काम",
        subtitle: "मेरी हाल की परियोजनाओं और रचनात्मक समाधानों का प्रदर्शन",
      },
      services: {
        title: "सेवाएं",
        subtitle: "मैं आपकी किस तरह मदद कर सकती हूं",
      },
      testimonials: {
        title: "ग्राहक क्या कहते हैं",
      },
      contact: {
        title: "आइए मिलकर काम करें",
        subtitle:
          "अपने विजन को जीवंत बनाने के लिए तैयार हैं? आइए कुछ अद्भुत बनाते हैं।",
        name: "आपका नाम",
        email: "आपका ईमेल",
        message: "आपका संदेश",
        send: "संदेश भेजें",
        location: "मुंबई, भारत",
      },
      footer: {
        copyright: "© 2024 साहेली गोस्वामी। सभी अधिकार सुरक्षित।",
        darkMode: "डार्क मोड",
        language: "भाषा",
      },
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory,
        );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-magenta/20 via-turquoise/20 to-purple/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-magenta/10 via-transparent to-turquoise/10 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <p className="text-2xl md:text-3xl mb-4 text-muted-foreground">
              {t.hero.greeting}
            </p>
            <h1 className="text-6xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-magenta to-turquoise bg-clip-text text-transparent">
              {t.hero.name}
            </h1>
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-purple">
              {t.hero.role}
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-magenta hover:bg-magenta/90 text-magenta-foreground px-8 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <Eye className="mr-2 h-5 w-5" />
                {t.hero.portfolio}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-turquoise text-turquoise hover:bg-turquoise hover:text-turquoise-foreground px-8 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                {t.hero.resume}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-magenta to-turquoise p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Saheli Goswami"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.about.description}
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-magenta">
                  {t.about.skills}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-turquoise/10 text-turquoise border-turquoise/20 hover:bg-turquoise/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple">
              {t.portfolio.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 ${
                  activeCategory === category
                    ? "bg-magenta hover:bg-magenta/90 text-magenta-foreground"
                    : "border-magenta text-magenta hover:bg-magenta/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-turquoise text-turquoise-foreground mb-2">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple">
              {t.services.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-none bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-magenta to-turquoise flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="border-none shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-sunshine text-sunshine"
                          />
                        ),
                      )}
                    </div>
                    <blockquote className="text-xl md:text-2xl italic text-muted-foreground mb-8 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-lg text-purple">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].role},{" "}
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-magenta text-magenta hover:bg-magenta hover:text-magenta-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-magenta text-magenta hover:bg-magenta hover:text-magenta-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-magenta"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder={t.contact.name}
                        className="border-gray-300 focus:border-magenta focus:ring-magenta"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder={t.contact.email}
                        className="border-gray-300 focus:border-magenta focus:ring-magenta"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder={t.contact.message}
                        rows={6}
                        className="border-gray-300 focus:border-magenta focus:ring-magenta"
                      />
                    </div>
                    <Button className="w-full bg-magenta hover:bg-magenta/90 text-magenta-foreground py-6 text-lg rounded-full">
                      <Mail className="mr-2 h-5 w-5" />
                      {t.contact.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-turquoise" />
                    <span>{t.contact.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <Mail className="h-5 w-5 text-turquoise" />
                    <span>hello@saheligoswami.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple">
                  Follow My Work
                </h4>
                <div className="flex space-x-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-magenta text-magenta hover:bg-magenta hover:text-magenta-foreground"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-turquoise text-turquoise hover:bg-turquoise hover:text-turquoise-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-purple text-purple hover:bg-purple hover:text-purple-foreground"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">{t.footer.copyright}</p>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">
                  {t.footer.darkMode}
                </span>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4 text-sunshine" />
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  <Moon className="h-4 w-4 text-purple" />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">
                  {t.footer.language}
                </span>
                <div className="flex space-x-2">
                  <Button
                    variant={language === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                    className={`text-xs ${
                      language === "en"
                        ? "bg-turquoise hover:bg-turquoise/90 text-turquoise-foreground"
                        : "border-turquoise text-turquoise hover:bg-turquoise/10"
                    }`}
                  >
                    🇬���� EN
                  </Button>
                  <Button
                    variant={language === "hi" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("hi")}
                    className={`text-xs ${
                      language === "hi"
                        ? "bg-turquoise hover:bg-turquoise/90 text-turquoise-foreground"
                        : "border-turquoise text-turquoise hover:bg-turquoise/10"
                    }`}
                  >
                    🇮🇳 हि
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full bg-magenta hover:bg-magenta/90 text-magenta-foreground shadow-lg z-50 animate-bounce"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
