import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string; // Allow custom classes
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
