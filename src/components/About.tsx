import { Battery, Shield, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Battery,
      title: "Energy Independence",
      description: "Take control of your power supply with cutting-edge battery storage technology",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Ensure continuous power with backup systems designed for Canadian conditions",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Reduce your carbon footprint while lowering energy costs for the long term",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Churchill Power
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're dedicated to bringing reliable, efficient energy storage solutions to homeowners, 
            small businesses, and farms across Ontario. Our mission is to provide energy independence, 
            cost savings, and peace of mind through expertly installed Battery Energy Storage Systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
