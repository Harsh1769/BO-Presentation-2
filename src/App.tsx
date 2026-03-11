/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Briefcase, 
  Users, 
  Building2, 
  Handshake, 
  Scale, 
  ShieldCheck, 
  Globe, 
  LayoutDashboard,
  Presentation,
  CheckCircle2
} from 'lucide-react';

// Theme Colors
const colors = {
  navy: '#001F3F',
  gold: '#D4AF37',
  goldLight: '#F4D03F',
  white: '#FFFFFF',
  gray: '#F5F5F5',
};

interface SlideProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 text-white"
  >
    {children}
  </motion.div>
);

const TitleSlide = () => (
  <SlideWrapper>
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center space-y-8"
    >
      <div className="flex justify-center mb-4">
        <Presentation size={80} className="text-[#D4AF37]" />
      </div>
      
      <div className="space-y-4">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#D4AF37] font-serif">
          Forms of Business Organization
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-60">
          Detailed Study of GSEB Class 11 • Chapters 2 & 3
        </p>
      </div>

      <div className="pt-12 flex flex-col md:flex-row justify-center gap-12 border-t border-[#D4AF37]/20">
        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2 font-bold">Project Lead</p>
          <p className="text-xl font-medium tracking-tight">HARSH SHARMA</p>
        </div>
        
        <div className="hidden md:block w-px bg-[#D4AF37]/20 h-12 self-center" />

        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2 font-bold">Presented By</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
            <p className="text-lg font-medium opacity-90">Harsh Sharma</p>
            <span className="opacity-30">•</span>
            <p className="text-lg font-medium opacity-90">Harsh Karan</p>
            <span className="opacity-30">•</span>
            <p className="text-lg font-medium opacity-90">Dev Khatri</p>
          </div>
        </div>
      </div>
    </motion.div>
  </SlideWrapper>
);

const IntroSlide = () => (
  <SlideWrapper>
    <div className="max-w-4xl w-full space-y-12">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <LayoutDashboard className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Introduction & Classification</h2>
      </div>
      <p className="text-xl leading-relaxed opacity-90">
        Human needs are diverse, and to satisfy them, different types of business entities are formed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Private Sector", items: ["Sole Proprietorship", "HUF", "Partnership", "Company"], icon: <Briefcase /> },
          { title: "Public Sector", items: ["Departmental", "Statutory Corp"], icon: <Building2 /> },
          { title: "Global Enterprises", items: ["MNCs", "Joint Ventures"], icon: <Globe /> }
        ].map((cat, i) => (
          <motion.div 
            key={cat.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="text-[#D4AF37] mb-4">{cat.icon}</div>
            <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
            <ul className="space-y-2 opacity-80 text-sm">
              {cat.items.map(item => <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4AF37]" /> {item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const SoleProprietorshipSlide = () => (
  <SlideWrapper>
    <div className="max-w-4xl w-full space-y-8">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <Briefcase className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Sole Proprietorship (Ekaki Vyapar)</h2>
      </div>
      <div className="bg-[#D4AF37]/10 p-6 rounded-lg border-l-4 border-[#D4AF37]">
        <p className="text-xl italic">"A business owned, managed, and controlled by a single person."</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {[
          { title: "Easy Formation", desc: "Minimal legal formalities to start or close." },
          { title: "Unlimited Liability", desc: "Personal assets are at risk if business fails." },
          { title: "Direct Incentive", desc: "The owner enjoys 100% of the profits." },
          { title: "Total Secrecy", desc: "Business affairs remain confidential to the owner." }
        ].map((feat, i) => (
          <motion.div 
            key={feat.title}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            className="flex gap-4"
          >
            <div className="mt-1"><CheckCircle2 className="text-[#D4AF37]" size={20} /></div>
            <div>
              <h4 className="text-lg font-bold">{feat.title}</h4>
              <p className="opacity-70">{feat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const HUFSlide = () => (
  <SlideWrapper>
    <div className="max-w-4xl w-full space-y-8">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <Users className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Hindu Undivided Family (HUF)</h2>
      </div>
      <p className="text-xl opacity-90">Business owned by members of a joint Hindu family, governed by Hindu Law.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-[#D4AF37] text-xl font-bold mb-2">The 'Karta'</h3>
          <p className="text-sm opacity-80">The eldest member who manages everything. Has <strong>unlimited liability</strong>.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-[#D4AF37] text-xl font-bold mb-2">Coparceners</h3>
          <p className="text-sm opacity-80">Other family members. Their liability is <strong>limited</strong> to their share in property.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-[#D4AF37] text-xl font-bold mb-2">Continuity</h3>
          <p className="text-sm opacity-80">Business continues even after the death of the Karta; the next eldest takes over.</p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const PartnershipSlide = () => (
  <SlideWrapper>
    <div className="max-w-4xl w-full space-y-8">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <Handshake className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Partnership (Bhagidari)</h2>
      </div>
      <p className="text-xl opacity-90 italic">"A relationship between persons who agree to share profits of a business."</p>
      <div className="space-y-6">
        {[
          { title: "Partnership Deed", desc: "A written agreement containing rules, regulations, and profit-sharing ratios." },
          { title: "Mutual Agency", desc: "Every partner is both a principal (for themselves) and an agent (for others)." },
          { title: "Unlimited Liability", desc: "Partners are collectively and individually liable for the firm's debts." }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            className="flex items-start gap-4 bg-white/5 p-4 rounded-lg"
          >
            <div className="p-2 bg-[#D4AF37]/20 rounded text-[#D4AF37]">{i + 1}</div>
            <div>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="opacity-70">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const PartnerTypesSlide = () => (
  <SlideWrapper>
    <div className="max-w-5xl w-full space-y-8">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <Users className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Types of Partners</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { type: "Active Partner", desc: "Takes part in daily management and operations." },
          { type: "Sleeping Partner", desc: "Invests capital but doesn't participate in work." },
          { type: "Nominal Partner", desc: "Lends his name to the firm; no capital or profit share." },
          { type: "Partner by Estoppel", desc: "Represents themselves as a partner to third parties." }
        ].map((p, i) => (
          <motion.div 
            key={p.type}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between"
          >
            <h3 className="text-[#D4AF37] font-bold text-lg mb-4">{p.type}</h3>
            <p className="text-sm opacity-70 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const CooperativeSlide = () => (
  <SlideWrapper>
    <div className="max-w-4xl w-full space-y-8">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <ShieldCheck className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Co-operative Society (Sahkari Mandali)</h2>
      </div>
      <div className="text-center py-4">
        <p className="text-2xl font-serif italic text-[#D4AF37]">"Each for all and all for each."</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Voluntary Membership", desc: "Anyone can join or leave the society at any time." },
          { title: "Democratic Control", desc: "Based on the principle of 'One member, one vote'." },
          { title: "Service Motive", desc: "Primary aim is helping members, not just maximizing profit." },
          { title: "Separate Legal Identity", desc: "Registered under the Co-operative Societies Act." }
        ].map((feat, i) => (
          <div key={feat.title} className="bg-white/5 p-5 rounded-lg border-l-2 border-[#D4AF37]">
            <h4 className="font-bold text-[#D4AF37] mb-1">{feat.title}</h4>
            <p className="text-sm opacity-70">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const CompanySlide = () => (
  <SlideWrapper>
    <div className="max-w-4xl w-full space-y-8">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <Building2 className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Joint Stock Company (Company)</h2>
      </div>
      <p className="text-xl opacity-90">An artificial person created by law with perpetual succession and a common seal.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="text-[#D4AF37]"><Scale /></div>
            <div>
              <h4 className="font-bold">Artificial Person</h4>
              <p className="text-sm opacity-70">Can sue and be sued in its own name, separate from owners.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-[#D4AF37]"><ShieldCheck /></div>
            <div>
              <h4 className="font-bold">Common Seal</h4>
              <p className="text-sm opacity-70">Acts as the official signature of the company on documents.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="text-[#D4AF37]"><Globe /></div>
            <div>
              <h4 className="font-bold">Transferability of Shares</h4>
              <p className="text-sm opacity-70">Easy to buy/sell shares (especially in Public Ltd companies).</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-[#D4AF37]"><Scale /></div>
            <div>
              <h4 className="font-bold">Limited Liability</h4>
              <p className="text-sm opacity-70">Shareholders only lose what they have invested in the company.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const ComparisonSlide = () => (
  <SlideWrapper>
    <div className="max-w-5xl w-full space-y-8">
      <div className="flex items-center gap-4 border-b border-[#D4AF37] pb-4">
        <LayoutDashboard className="text-[#D4AF37]" size={40} />
        <h2 className="text-4xl font-bold text-[#D4AF37]">Quick Comparison Table</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#D4AF37] text-[#001F3F]">
              <th className="p-4 font-bold">Feature</th>
              <th className="p-4 font-bold">Sole Proprietorship</th>
              <th className="p-4 font-bold">Partnership</th>
              <th className="p-4 font-bold">Joint Stock Company</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { f: "Liability", s: "Unlimited", p: "Unlimited", c: "Limited" },
              { f: "Capital", s: "Very Limited", p: "Limited/Medium", c: "Large/Huge" },
              { f: "Management", s: "Owner himself", p: "Partners", c: "Board of Directors" },
              { f: "Life", s: "Unstable", p: "Unstable", c: "Perpetual (Long-lasting)" }
            ].map((row, i) => (
              <tr key={row.f} className="border-b border-white/10 hover:bg-white/5">
                <td className="p-4 font-bold text-[#D4AF37]">{row.f}</td>
                <td className="p-4 opacity-80">{row.s}</td>
                <td className="p-4 opacity-80">{row.p}</td>
                <td className="p-4 opacity-80">{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </SlideWrapper>
);

const ConclusionSlide = () => (
  <SlideWrapper>
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center space-y-8"
    >
      <h2 className="text-5xl font-bold text-[#D4AF37]">Conclusion</h2>
      <p className="text-2xl max-w-2xl mx-auto leading-relaxed opacity-90">
        The choice of business form depends on the scale of operations, capital required, and risk-taking ability.
      </p>
      <div className="pt-16">
        <p className="text-4xl font-bold text-[#D4AF37] mb-4">Thank you for your time!</p>
        <p className="text-xl opacity-60">Any questions?</p>
      </div>
    </motion.div>
  </SlideWrapper>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <TitleSlide />;
      case 1: return <IntroSlide />;
      case 2: return <SoleProprietorshipSlide />;
      case 3: return <HUFSlide />;
      case 4: return <PartnershipSlide />;
      case 5: return <PartnerTypesSlide />;
      case 6: return <CooperativeSlide />;
      case 7: return <CompanySlide />;
      case 8: return <ComparisonSlide />;
      case 9: return <ConclusionSlide />;
      default: return <TitleSlide />;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#001F3F] font-sans overflow-hidden flex flex-col">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none" />

        {/* Dynamic Cool-toned Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600 blur-[160px] opacity-10 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-cyan-700 blur-[160px] opacity-10 animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Center Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-transparent via-[#001F3F]/50 to-[#001F3F]" />

        {/* Floating Geometric Accents - More Subtle */}
        <motion.div 
          animate={{ 
            rotate: 360,
            y: [0, -15, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-[10%] w-80 h-80 border border-white/5 rounded-full flex items-center justify-center"
        >
          <div className="w-64 h-64 border border-white/5 rounded-full" />
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full top-0" />
        </motion.div>
        
        <motion.div 
          animate={{ 
            rotate: -360,
            x: [0, 20, 0]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-[5%] w-[30rem] h-[30rem] border border-white/5 rounded-full"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <React.Fragment key={currentSlide}>
            {renderSlide()}
          </React.Fragment>
        </AnimatePresence>
      </main>

      {/* Controls */}
      <footer className="relative z-20 p-6 flex items-center justify-between bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-white/40 text-sm font-mono">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      </footer>
    </div>
  );
}
