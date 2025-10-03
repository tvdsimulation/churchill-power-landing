import { Card } from "@/components/ui/card";
import { DollarSign, Zap, Sprout, Home, Building2, Tractor } from "lucide-react";
import iconHome from "@/assets/icon-home.jpg";
import iconBusiness from "@/assets/icon-business.jpg";
import iconFarm from "@/assets/icon-farm.jpg";

const Solutions = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce electricity bills with time-of-use optimization and demand charge management",
    },
    {
      icon: Zap,
      title: "Backup Power",
      description: "Keep essential systems running during grid outages with reliable battery backup",
    },
    {
      icon: Sprout,
      title: "Sustainability",
      description: "Store renewable energy and reduce reliance on fossil fuel-based grid power",
    },
  ];

  const applications = [
    {
      image: iconHome,
      title: "Residential Homes",
      description: "Perfect for homeowners looking to reduce energy costs and ensure backup power during outages",
    },
    {
      image: iconBusiness,
      title: "Small Businesses",
      description: "Keep operations running smoothly with reliable energy storage and demand charge reduction",
    },
    {
      image: iconFarm,
      title: "Farms & Agriculture",
      description: "Protect critical farming operations and livestock with dependable backup power systems",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            BESS Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our Battery Energy Storage Systems combine advanced battery technology with 
            smart inverters to deliver reliable, efficient energy management for your property.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-energy mb-6">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Applications */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Perfect For</h3>
          <p className="text-lg text-muted-foreground">
            Tailored solutions for every application
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <Card
              key={app.title}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in border-border/50 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">{app.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
