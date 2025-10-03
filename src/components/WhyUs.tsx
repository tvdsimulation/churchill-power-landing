import { Card } from "@/components/ui/card";
import { Award, MapPin, Wrench, Users } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Years of experience installing and maintaining battery energy storage systems across Ontario",
    },
    {
      icon: MapPin,
      title: "Ontario Focused",
      description: "Deep understanding of local energy regulations, climate conditions, and grid requirements",
    },
    {
      icon: Wrench,
      title: "Turnkey Installation",
      description: "Complete end-to-end service from consultation and design to installation and support",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated to your satisfaction with personalized solutions and ongoing support",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Churchill Power?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We combine technical expertise with personalized service to deliver 
            energy storage solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
