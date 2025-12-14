import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle p-4">
      <Card className="max-w-2xl w-full p-8 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <Search className="w-12 h-12 text-primary" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="btn-hero inline-flex items-center">
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
