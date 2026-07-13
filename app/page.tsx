import { Hero } from '@/components/Hero';
import { InPractice } from '@/components/InPractice';
import { IdealFor } from '@/components/IdealFor';
import { Scarcity } from '@/components/Scarcity';
import { SocialProof } from '@/components/SocialProof';
import { OfferCard } from '@/components/OfferCard';
import { Guarantee } from '@/components/Guarantee';
import { FAQ } from '@/components/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <InPractice />
      <IdealFor />
      <Scarcity />
      <SocialProof />
      <OfferCard />
      <Guarantee />
      <FAQ />
    </div>
  );
}
