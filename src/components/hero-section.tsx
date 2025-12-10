import React from "react";
import { CheckCircle, Globe, Shield, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Globe,
    title: "Hébergement Gratuit (1 An)",
    description: "Offert pour tous les sites avec noms de domaines en .BF.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Tableau Analytique Inclus",
    description: "Surveillance des visiteurs, des performances et de la sécurité du site web.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Prix Compétitifs",
    description: "Conception de sites web à partir de 10 000 FCFA.",
    highlight: false,
  },
];

export function HeroSection() {
  return (
    <header className="w-full max-w-4xl mx-auto text-center mb-12 p-6 md:p-10 bg-card border border-border rounded-xl shadow-2xl dark:shadow-none">
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
        FAS0-BARA INTELLIGENCE
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        Votre partenaire pour une présence en ligne percutante.
      </p>

      <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-lg font-semibold mb-8 shadow-lg">
        Conception de Sites Web à partir de 10 000 FCFA
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className={`transition-all duration-300 hover:shadow-lg ${feature.highlight ? "border-primary ring-2 ring-primary/50" : "border-border"}`}
          >
            <CardContent className="flex flex-col items-center p-4 pt-6">
              <feature.icon className={`w-8 h-8 mb-3 ${feature.highlight ? "text-primary" : "text-accent-foreground"}`} />
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-6 italic">
        *NB: Prix du nom de domaine non inclus. Paiement supplémentaire pour fonctionnalités non incluses.
      </p>

      <div className="bg-secondary p-4 rounded-lg mb-8">
        <p className="text-lg font-semibold text-secondary-foreground mb-2">
          C'est le moment idéal pour vos :
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            <CheckCircle className="w-4 h-4 mr-1" /> Portfolios
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            <CheckCircle className="w-4 h-4 mr-1" /> CV en ligne
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            <CheckCircle className="w-4 h-4 mr-1" /> Sites Vitrines
          </Badge>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <a href="https://wa.me/22656888879" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="text-lg px-8 py-6 shadow-xl">
            <Smartphone className="w-5 h-5 mr-2" /> Contactez-nous sur WhatsApp
          </Button>
        </a>
        <p className="text-xl font-bold text-primary">
          +226 56888879
        </p>
        <p className="text-sm text-muted-foreground">
          Ouagadougou Arrondissement 12
        </p>
      </div>
    </header>
  );
}

// We need to import Badge, which is a Shadcn component.
import { Badge } from "@/components/ui/badge";