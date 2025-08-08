import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";
import { landingContent } from "@/content/landing";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{landingContent.hero.headline}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">{landingContent.hero.subheadline}</p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" onClick={() => navigate("/create")}>{landingContent.hero.primaryCTA}</Button>
          <Button size="lg" variant="outline" onClick={() => {
            const el = document.getElementById("how-it-works");
            el?.scrollIntoView({ behavior: "smooth" });
          }}>
            {landingContent.hero.secondaryCTA}
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 grid gap-6 md:grid-cols-3">
        {landingContent.features.map((f, idx) => (
          <div key={idx} className="p-6 rounded-xl border bg-card text-card-foreground">
            <f.icon className={`w-8 h-8 text-${f.color} mb-4`} />
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-secondary">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {landingContent.howItWorks.map((s) => (
              <div key={s.number} className="p-6 rounded-xl border bg-card text-card-foreground">
                <div className="w-8 h-8 rounded-full bg-retro-neutral/10 flex items-center justify-center mb-3">{s.number}</div>
                <h4 className="font-semibold mb-1">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" onClick={() => navigate("/create")}>Start Your First Retro <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-retro-positive/10 text-retro-positive mb-4">
          <Zap className="w-4 h-4" /> {landingContent.cta.badge}
        </div>
        <h2 className="text-3xl font-bold mb-4">{landingContent.cta.title}</h2>
        <p className="text-muted-foreground mb-8">{landingContent.cta.subtitle}</p>
        <Button size="lg" onClick={() => navigate("/create")}>{landingContent.cta.button}</Button>
      </section>
    </div>
  );
};

export default Landing;


