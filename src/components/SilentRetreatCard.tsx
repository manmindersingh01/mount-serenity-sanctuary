import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SilentRetreatCardProps {
  title: string;
  description: string;
  duration: string;
  dates: string;
  price: string;
  availability: "available" | "limited" | "full";
  image: string;
}

export const SilentRetreatCard = ({
  title,
  description,
  duration,
  dates,
  price,
  availability,
  image
}: SilentRetreatCardProps) => {
  const availabilityMap = {
    available: { label: "Spaces Available", color: "bg-success text-success-foreground" },
    limited: { label: "Limited Spaces", color: "bg-warning text-warning-foreground" },
    full: { label: "Fully Booked", color: "bg-error text-error-foreground" }
  };

  return (
    <Card className="card-retreat overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge 
          className={`absolute top-3 right-3 ${availabilityMap[availability].color}`}
        >
          {availabilityMap[availability].label}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="heading-spiritual">{title}</CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span>{duration}</span>
          <span className="font-medium">{price}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="sacred-text">{description}</p>
        <div className="mt-4 p-2 bg-surface-muted rounded-md">
          <p className="text-sm font-medium">Upcoming Dates:</p>
          <p className="text-sm">{dates}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="btn-primary w-full" 
          disabled={availability === "full"}
        >
          {availability === "full" ? "Join Waitlist" : "Reserve Your Space"}
        </Button>
      </CardFooter>
    </Card>
  );
};