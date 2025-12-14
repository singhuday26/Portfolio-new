import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            © {currentYear} Uday Singh. All Rights Reserved. | Built with 
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;