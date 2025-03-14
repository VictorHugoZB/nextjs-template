import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Class = React.ComponentProps<"div">["className"];

export function H1({ children, className }: { children: ReactNode; className?: Class }) {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>;
}

export function H2({ children, className }: { children: ReactNode; className?: Class }) {
  return <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>{children}</h2>;
}

export function H3({ children, className }: { children: ReactNode; className?: Class }) {
  return <h2 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h2>;
}

export function H4({ children, className }: { children: ReactNode; className?: Class }) {
  return <h2 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h2>;
}

export function P({ children, className }: { children: ReactNode; className?: Class }) {
  return <p className={cn("leading-7", className)}>{children}</p>;
}
