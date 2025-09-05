import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IncenseSmoke } from "@/components/IncenseSmoke";

const NotFoundPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 text-center relative">
        <IncenseSmoke position="left" />
        <IncenseSmoke position="right" />
        
        <h1 className="font-display text-6xl text-primary-800 dark:text-primary-200 mb-6">
          404
        </h1>
        
        <h2 className="font-display text-3xl text-primary-700 dark:text-primary-300 mb-6">
          Path Not Found
        </h2>
        
        <p className="sacred-text max-w-xl mx-auto mb-8">
          Like a traveler who has wandered off the path, you've reached a page that doesn't exist. This too is part of the journey.
        </p>
        
        <div className="flex justify-center">
          <Link to="/">
            <Button className="btn-primary">
              Return to the Main Path
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;