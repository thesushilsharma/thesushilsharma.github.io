import { AnimatedSection } from "./animations/animated-section";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';

export function GitHubActivitySection() {
  return (
    <AnimatedSection id="github-activity">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">GitHub Activity</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          I'm an active contributor to the open-source community. Check out my GitHub profile for my latest activity and projects.
        </p>
        <div className="mt-6">
            <Button size="lg" asChild>
                <a href="https://github.com/thesushilsharma" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="mr-2 h-5 w-5" />
                    Visit My GitHub
                    <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
