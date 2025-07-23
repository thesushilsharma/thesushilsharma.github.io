import { AnimatedSection } from "./animations/animated-section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="w-full max-w-2xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-sm border-border/20">
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Have a project in mind?</CardTitle>
            <CardDescription className="max-w-[700px] text-muted-foreground md:text-xl pt-2">
            Let's create more tools and ideas that brings us together.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Drop me a line, I'd be delighted to hear from you!.
Let's talk over a 🍵" rows={5} />
                </div>
                <div className="text-center">
                    <Button type="submit" size="lg" className="group w-full sm:w-auto">
                       Send Message
                        <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                </div>
            </form>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
