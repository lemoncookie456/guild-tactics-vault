import { Torch } from "@/components/ui/torch";
import { Github, Twitter, MessageCircle } from "lucide-react";

export const TorchFooter = () => {
  return (
    <footer className="relative bg-guild-shadow border-t border-guild-stone overflow-hidden">
      {/* Flickering Torches */}
      <div className="absolute top-0 left-0 right-0 flex justify-around py-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Torch 
            key={i} 
            size="md" 
            className={`animate-torch-flame`} 
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-cinzel font-bold text-guild-gold mb-4">
                Guild Tournament Protocol
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                The ultimate blockchain-secured tournament platform where guild strategies remain encrypted until battle begins. Join the revolution of competitive gaming.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 bg-guild-stone/50 rounded-lg hover:bg-guild-gold/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-guild-gold" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-guild-stone/50 rounded-lg hover:bg-guild-gold/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-guild-gold" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-guild-stone/50 rounded-lg hover:bg-guild-gold/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-guild-gold" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-4">
                Tournament
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Active Battles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Guild Rankings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Prize Pool
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Tournament Rules
                  </a>
                </li>
              </ul>
            </div>

            {/* Guild Management */}
            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-4">
                Guild
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Create Guild
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Join Guild
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Guild Treasury
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-guild-gold transition-colors">
                    Member Management
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-guild-stone mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Guild Tournament Protocol. All rights reserved. Powered by blockchain technology.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-guild-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-guild-gold text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-guild-gold text-sm transition-colors">
                Security Audit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-guild-ember/10 to-transparent pointer-events-none" />
    </footer>
  );
};