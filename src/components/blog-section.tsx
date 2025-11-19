import { AnimatedSection } from "./animations/animated-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/config/site";

export function BlogListSection() {
  return (
    <AnimatedSection id="blog">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4">
          ✍️ Latest Articles
        </div>
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl lg:text-6xl">
          My Blog
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Thoughts on technology, development, and everything in between.
          Sharing insights from my journey as a developer.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            key={post.title}
            className="group flex flex-col overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 hover:bg-card/80"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                data-ai-hint={post.hint}
                className="aspect-[2/1] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20">
                <Badge
                  variant="secondary"
                  className="bg-background/90 backdrop-blur-sm"
                >
                  {post.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="space-y-4 pb-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                {post.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {post.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow" />

            <CardFooter className="pt-0">
              <Button
                asChild
                variant="ghost"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg" className="group">
          View All Articles
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </AnimatedSection>
  );
}
