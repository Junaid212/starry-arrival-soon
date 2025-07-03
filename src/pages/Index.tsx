
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Leaf, Apple, Heart, Sparkles, Star } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "We'll notify you when we launch.",
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900">
      {/* Simplified Floating Elements - Reduced quantity */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-green-400/30 to-lime-300/30 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Simplified Food Icons - Static positions */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`apple-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${10 + i * 10}%`,
            }}
          >
            <Apple 
              className="text-white" 
              size={window.innerWidth < 768 ? 12 : 16}
            />
          </div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + i * 8}%`,
            }}
          >
            <Leaf 
              className="text-lime-400" 
              size={window.innerWidth < 768 ? 8 : 12}
            />
          </div>
        ))}
      </div>

      {/* Simplified Background Orbs - Static */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-green-500/20 to-emerald-400/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-60 h-60 sm:w-[500px] sm:h-[500px] bg-gradient-to-l from-lime-500/15 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-500/15 to-lime-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content - Simplified */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Simplified Logo/Icon */}
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="relative">
              <Apple className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-400 mx-auto mb-4" />
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-400 absolute -top-1 -right-1 sm:-top-2 sm:-right-2" 
                fill="currentColor" />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-yellow-300 absolute -bottom-1 -left-1" />
            </div>
          </div>

          {/* Simplified Main Heading - No animations */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              Coming
            </span>
            <br />
            <span className="text-white">
              Soon
            </span>
          </h1>

          {/* Simplified Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We're preparing something <span className="text-green-400 font-semibold">fresh</span> and <span className="text-lime-400 font-semibold">nutritious</span>. Get ready for a healthy lifestyle revolution that will nourish your body and soul.
          </p>

          {/* Simplified Progress Bar */}
          <div className="mb-8 sm:mb-12 max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
            <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-800/50 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm border border-white/5">
              <div className="bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 h-2 sm:h-3 rounded-full" style={{ width: '85%' }}>
              </div>
            </div>
          </div>

          {/* Simplified Email Subscription Card */}
          <Card className="max-w-xs sm:max-w-md mx-auto p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white mb-4 sm:mb-6">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span className="font-semibold text-sm sm:text-base md:text-lg">Be the first to know</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-white/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-500 hover:to-lime-500 transition-all duration-300 hover:scale-105 text-sm sm:text-base px-6 py-2 sm:px-4 sm:py-2"
                >
                  Notify Me
                </Button>
              </div>
            </form>
          </Card>

          {/* Simplified Features Preview */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-0">
            {[
              { icon: Leaf, title: "Natural", desc: "100% organic ingredients", color: "from-green-500/20 to-emerald-400/20" },
              { icon: Apple, title: "Fresh", desc: "Farm-to-table freshness", color: "from-red-500/20 to-pink-400/20" },
              { icon: Heart, title: "Healthy", desc: "Nutritious lifestyle choices", color: "from-rose-500/20 to-red-400/20" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="relative mb-3 sm:mb-4">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400 mx-auto relative z-10" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Simplified Social Links */}
          <div className="mt-12 sm:mt-16 flex justify-center space-x-6">
            <div className="text-gray-400 text-xs sm:text-sm">
              Follow us for updates
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs sm:text-sm">
        © 2024 Coming Soon. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
