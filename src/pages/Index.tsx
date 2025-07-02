
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
      {/* 3D Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`cube-${i}`}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
            }}
          >
            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-green-400/20 to-lime-300/20 backdrop-blur-sm border border-white/10 animate-spin-slow transform-gpu preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-400/30 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Animated Food Icons with 3D effect */}
      <div className="absolute inset-0">
        {[...Array(window.innerWidth < 768 ? 15 : 25)].map((_, i) => (
          <div
            key={`apple-${i}`}
            className="absolute animate-float-rotate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Apple 
              className="text-white/25 drop-shadow-lg animate-pulse transform-gpu" 
              size={window.innerWidth < 768 ? Math.random() * 10 + 6 : Math.random() * 16 + 8}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))',
                transform: `perspective(1000px) rotateX(${Math.random() * 45}deg) rotateY(${Math.random() * 45}deg)`
              }}
            />
          </div>
        ))}
        {[...Array(window.innerWidth < 768 ? 12 : 20)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute animate-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <Leaf 
              className="text-lime-400/20 animate-spin-slow transform-gpu" 
              size={window.innerWidth < 768 ? Math.random() * 8 + 4 : Math.random() * 12 + 6}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(163, 230, 53, 0.2))',
              }}
            />
          </div>
        ))}
        {[...Array(window.innerWidth < 768 ? 10 : 15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1}s`,
            }}
          >
            <Star 
              className="text-yellow-300/30 animate-pulse" 
              size={window.innerWidth < 768 ? Math.random() * 6 + 3 : Math.random() * 8 + 4}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Floating Orbs with 3D depth - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-green-500/30 to-emerald-400/25 rounded-full blur-3xl animate-pulse-slow transform-gpu"></div>
        <div className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-60 h-60 sm:w-[500px] sm:h-[500px] bg-gradient-to-l from-lime-500/20 to-green-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-500/25 to-lime-400/20 rounded-full blur-3xl animate-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-500/30 to-yellow-400/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-500/20 to-cyan-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse-slow"></div>
      </div>

      {/* Main Content with Enhanced 3D Effects - Responsive */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto animate-fade-in-up">
          {/* Enhanced Logo/Icon with 3D effect - Responsive */}
          <div className="mb-6 sm:mb-8 inline-block animate-float-gentle">
            <div className="relative transform-gpu preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-lime-400/20 rounded-full blur-xl animate-pulse"></div>
              <Apple className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-400 mx-auto mb-4 animate-bounce-gentle relative z-10 drop-shadow-2xl" 
                style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))' }} />
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-400 absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-heartbeat" 
                fill="currentColor" />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-yellow-300 absolute -bottom-1 -left-1 animate-twinkle" />
            </div>
          </div>

          {/* Enhanced Main Heading with 3D text effect - Responsive */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-text-glow">
            <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-shift inline-block transform-gpu">
              Coming
            </span>
            <br />
            <span className="text-white hover-scale-3d inline-block transition-all duration-500 transform-gpu perspective-1000 animate-text-float">
              Soon
            </span>
          </h1>

          {/* Enhanced Subtitle - Responsive */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed animate-fade-in-delay px-4 sm:px-0">
            We're preparing something <span className="text-green-400 font-semibold animate-pulse">fresh</span> and <span className="text-lime-400 font-semibold animate-pulse">nutritious</span>. Get ready for a healthy lifestyle revolution that will nourish your body and soul.
          </p>

          {/* Enhanced Progress Bar with 3D effect - Responsive */}
          <div className="mb-8 sm:mb-12 max-w-xs sm:max-w-md mx-auto animate-slide-up px-4 sm:px-0">
            <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span className="animate-pulse">85%</span>
            </div>
            <div className="w-full bg-gray-800/50 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm border border-white/5">
              <div className="bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 h-2 sm:h-3 rounded-full animate-progress-glow relative overflow-hidden" style={{ width: '85%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Email Subscription Card - Responsive */}
          <Card className="max-w-xs sm:max-w-md mx-auto p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 animate-card-float transform-gpu hover:scale-105 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white mb-4 sm:mb-6">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-bounce-gentle" />
                <span className="font-semibold text-sm sm:text-base md:text-lg">Be the first to know</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-twinkle" />
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
                  className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-500 hover:to-lime-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 transform-gpu text-sm sm:text-base px-6 py-2 sm:px-4 sm:py-2"
                >
                  Notify Me
                </Button>
              </div>
            </form>
          </Card>

          {/* Enhanced Features Preview with 3D cards - Responsive */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-0">
            {[
              { icon: Leaf, title: "Natural", desc: "100% organic ingredients", color: "from-green-500/20 to-emerald-400/20" },
              { icon: Apple, title: "Fresh", desc: "Farm-to-table freshness", color: "from-red-500/20 to-pink-400/20" },
              { icon: Heart, title: "Healthy", desc: "Nutritious lifestyle choices", color: "from-rose-500/20 to-red-400/20" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu animate-card-float shadow-xl"
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[0].replace('from-', 'rgba(').replace('/20', ', 0.1)')}, ${feature.color.split(' ')[1].replace('to-', 'rgba(').replace('/20', ', 0.05)')})`
                }}
              >
                <div className="relative mb-3 sm:mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl animate-pulse`}></div>
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400 mx-auto relative z-10 animate-bounce-gentle drop-shadow-lg" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3 animate-text-glow">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Social Links - Responsive */}
          <div className="mt-12 sm:mt-16 flex justify-center space-x-6 animate-fade-in-delay">
            <div className="text-gray-400 text-xs sm:text-sm animate-pulse">
              Follow us for updates
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer - Responsive */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs sm:text-sm animate-fade-in-delay">
        © 2024 Coming Soon. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
