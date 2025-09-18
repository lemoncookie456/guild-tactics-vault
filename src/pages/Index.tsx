import { GuildHeader } from "@/components/guild-header";
import { TournamentHero } from "@/components/tournament-hero";
import { TournamentBracket } from "@/components/tournament-bracket";
import { TorchFooter } from "@/components/torch-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GuildHeader />
      <TournamentHero />
      <TournamentBracket />
      <TorchFooter />
    </div>
  );
};

export default Index;
