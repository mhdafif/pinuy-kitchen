"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChefHat,
  Clock,
  Leaf,
  Flame,
  Users,
  Star,
} from "lucide-react";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">PT Pinuy Kitchen</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm hover:text-primary transition">
                Home
              </a>
              <a
                href="#features"
                className="text-sm hover:text-primary transition"
              >
                Features
              </a>
              <a
                href="#services"
                className="text-sm hover:text-primary transition"
              >
                Services
              </a>
            </div>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-primary">
              Welcome to PT Pinuy Kitchen
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Culinary Excellence Made Simple
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Experience premium food solutions with authentic recipes, quality
              ingredients, and innovative culinary expertise delivered to your
              doorstep.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Order Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Feature Cards Showcase */}
          <div className="space-y-4">
            <div className="bg-primary/90 text-primary-foreground rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90 mb-2">Fresh & Quality</p>
                  <h3 className="text-2xl font-bold">Premium Ingredients</h3>
                </div>
                <Leaf className="w-8 h-8 opacity-70" />
              </div>
              <p className="text-sm opacity-90">
                Handpicked ingredients sourced from trusted suppliers for the
                finest taste.
              </p>
              <button className="mt-6 text-sm font-semibold hover:gap-2 transition flex items-center gap-1">
                Explore <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-secondary/90 text-secondary-foreground rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90 mb-2">Fast & Reliable</p>
                  <h3 className="text-2xl font-bold">Quick Service</h3>
                </div>
                <Clock className="w-8 h-8 opacity-70" />
              </div>
              <p className="text-sm opacity-90">
                Fresh meals prepared quickly without compromising on quality and
                taste.
              </p>
              <button className="mt-6 text-sm font-semibold hover:gap-2 transition flex items-center gap-1">
                Explore <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Exceptional Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine tradition with innovation to bring you the best culinary
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Flame,
              title: "Authentic Recipes",
              desc: "Traditional methods meet modern techniques",
            },
            {
              icon: Users,
              title: "Expert Chefs",
              desc: "Trained professionals with years of experience",
            },
            {
              icon: Star,
              title: "5-Star Quality",
              desc: "Premium standards in every dish",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">
                Our Services
              </h2>
              <ul className="space-y-4">
                {[
                  "Catering & Events",
                  "Custom Meal Plans",
                  "Corporate Lunch Packages",
                  "Private Dining Experiences",
                  "Cooking Classes",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      ✓
                    </div>
                    <span className="font-medium text-foreground">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <p className="text-muted-foreground mb-4">
                Ready to elevate your dining experience?
              </p>
              <h3 className="text-2xl font-bold mb-6">Contact Us Today</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground placeholder-muted-foreground"
                />
                <textarea
                  placeholder="Tell us about your needs"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground placeholder-muted-foreground resize-none"
                />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium culinary
            experiences
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold">PT Pinuy Kitchen</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Culinary excellence at every bite
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Catering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Reservations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: info@pinuykitchen.com
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: +62 81321972065
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 PT Pinuy Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
