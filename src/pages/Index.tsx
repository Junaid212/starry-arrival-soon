
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
            <div className="w-8 h-8 bg-gradient-to-r from-green-400/20 to-lime-300/20 backdrop-blur-sm border border-white/10 animate-spin-slow transform-gpu preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-400/30 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Animated Food Icons with 3D effect */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
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
              size={Math.random() * 16 + 8}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))',
                transform: `perspective(1000px) rotateX(${Math.random() * 45}deg) rotateY(${Math.random() * 45}deg)`
              }}
            />
          </div>
        ))}
        {[...Array(20)].map((_, i) => (
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
              size={Math.random() * 12 + 6}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(163, 230, 53, 0.2))',
              }}
            />
          </div>
        ))}
        {[...Array(15)].map((_, i) => (
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
              size={Math.random() * 8 + 4}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Floating Orbs with 3D depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-500/30 to-emerald-400/25 rounded-full blur-3xl animate-pulse-slow transform-gpu"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-lime-500/20 to-green-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/25 to-lime-400/20 rounded-full blur-3xl animate-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-tl from-orange-500/30 to-yellow-400/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-teal-500/20 to-cyan-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse-slow"></div>
      </div>

      {/* Main Content with Enhanced 3D Effects */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Enhanced Logo/Icon with 3D effect */}
          <div className="mb-8 inline-block animate-float-gentle">
            <div className="relative transform-gpu preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-lime-400/20 rounded-full blur-xl animate-pulse"></div>
              <Apple className="w-20 h-20 text-green-400 mx-auto mb-4 animate-bounce-gentle relative z-10 drop-shadow-2xl" 
                style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))' }} />
              <Heart className="w-8 h-8 text-red-400 absolute -top-2 -right-2 animate-heartbeat" 
                fill="currentColor" />
              <Sparkles className="w-6 h-6 text-yellow-300 absolute -bottom-1 -left-1 animate-twinkle" />
            </div>
          </div>

          {/* Ultra Enhanced Main Heading with Multiple Effects */}
          <div className="mb-8 relative">
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-lime-400/40 to-emerald-400/30 blur-3xl animate-pulse-slow scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-green-400/30 to-cyan-400/20 blur-2xl animate-float scale-105"></div>
            
            <h1 className="relative text-6xl md:text-9xl font-black leading-tight">
              {/* Coming text with enhanced effects */}
              <div className="mb-2 relative">
                <span 
                  className="bg-gradient-to-r from-green-300 via-lime-300 to-emerald-300 bg-clip-text text-transparent inline-block transform-gpu perspective-1000 animate-text-float"
                  style={{
                    textShadow: '0 0 40px rgba(34, 197, 94, 0.8), 0 0 80px rgba(34, 197, 94, 0.6), 0 0 120px rgba(34, 197, 94, 0.4)',
                    filter: 'drop-shadow(0 10px 30px rgba(34, 197, 94, 0.7))',
                    WebkitTextStroke: '2px rgba(34, 197, 94, 0.3)',
                  }}
                >
                  Coming
                </span>
                {/* Sparkle effects around "Coming" */}
                <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-yellow-300 animate-twinkle" />
                <Star className="absolute -top-4 left-1/4 w-6 h-6 text-lime-300 animate-pulse" fill="currentColor" />
              </div>
              
              {/* Soon text with even more dramatic effects */}
              <div className="relative">
                <span 
                  className="bg-gradient-to-r from-white via-lime-200 to-green-200 bg-clip-text text-transparent inline-block transform-gpu preserve-3d hover:scale-110 transition-all duration-700"
                  style={{
                    textShadow: '0 0 60px rgba(255, 255, 255, 0.9), 0 0 100px rgba(163, 230, 53, 0.8), 0 0 140px rgba(34, 197, 94, 0.6)',
                    filter: 'drop-shadow(0 15px 40px rgba(255, 255, 255, 0.8)) drop-shadow(0 5px 20px rgba(34, 197, 94, 0.9))',
                    WebkitTextStroke: '3px rgba(255, 255, 255, 0.2)',
                    animation: 'textGlow 3s ease-in-out infinite, textFloat 4s ease-in-out infinite',
                  }}
                >
                  Soon
                </span>
                {/* Enhanced sparkle effects around "Soon" */}
                <Sparkles className="absolute -top-8 -left-8 w-10 h-10 text-yellow-200 animate-twinkle" style={{ animationDelay: '0.5s' }} />
                <Sparkles className="absolute -bottom-6 -right-8 w-12 h-12 text-lime-200 animate-twinkle" style={{ animationDelay: '1s' }} />
                <Star className="absolute top-1/2 -left-12 w-8 h-8 text-green-200 animate-pulse" fill="currentColor" style={{ animationDelay: '1.5s' }} />
                <Star className="absolute -top-2 right-1/4 w-7 h-7 text-yellow-200 animate-pulse" fill="currentColor" style={{ animationDelay: '2s' }} />
              </div>
            </h1>
            
            {/* Additional floating elements around the text */}
            <div className="absolute -inset-16 pointer-events-none">
              <Apple className="absolute top-0 left-0 w-6 h-6 text-green-300/50 animate-float-gentle" style={{ animationDelay: '0.5s' }} />
              <Leaf className="absolute top-1/4 right-0 w-5 h-5 text-lime-300/60 animate-drift" style={{ animationDelay: '1s' }} />
              <Heart className="absolute bottom-0 left-1/4 w-5 h-5 text-red-300/50 animate-heartbeat" fill="currentColor" style={{ animationDelay: '1.5s' }} />
              <Apple className="absolute bottom-1/4 right-1/4 w-4 h-4 text-emerald-300/50 animate-float-rotate" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            We're preparing something <span className="text-green-400 font-semibold animate-pulse">fresh</span> and <span className="text-lime-400 font-semibold animate-pulse">nutritious</span>. Get ready for a healthy lifestyle revolution that will nourish your body and soul.
          </p>

          {/* Enhanced Progress Bar with 3D effect */}
          <div className="mb-12 max-w-md mx-auto animate-slide-up">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span className="animate-pulse">85%</span>
            </div>
            <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/5">
              <div className="bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 h-3 rounded-full animate-progress-glow relative overflow-hidden" style={{ width: '85%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Email Subscription Card */}
          <Card className="max-w-md mx-auto p-8 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 animate-card-float transform-gpu hover:scale-105 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-center space-x-3 text-white mb-6">
                <Mail className="w-6 h-6 animate-bounce-gentle" />
                <span className="font-semibold text-lg">Be the first to know</span>
                <Sparkles className="w-5 h-5 animate-twinkle" />
              </div>
              <div className="flex space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-500 hover:to-lime-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 transform-gpu"
                >
                  Notify Me
                </Button>
              </div>
            </form>
          </Card>

          {/* Enhanced Features Preview with 3D cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Leaf, title: "Natural", desc: "100% organic ingredients", color: "from-green-500/20 to-emerald-400/20" },
              { icon: Apple, title: "Fresh", desc: "Farm-to-table freshness", color: "from-red-500/20 to-pink-400/20" },
              { icon: Heart, title: "Healthy", desc: "Nutritious lifestyle choices", color: "from-rose-500/20 to-red-400/20" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu animate-card-float shadow-xl"
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[0].replace('from-', 'rgba(').replace('/20', ', 0.1)')}, ${feature.color.split(' ')[1].replace('to-', 'rgba(').replace('/20', ', 0.05)')})`
                }}
              >
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl animate-pulse`}></div>
                  <feature.icon className="w-12 h-12 text-green-400 mx-auto relative z-10 animate-bounce-gentle drop-shadow-lg" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3 animate-text-glow">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Social Links */}
          <div className="mt-16 flex justify-center space-x-6 animate-fade-in-delay">
            <div className="text-gray-400 text-sm animate-pulse">
              Follow us for updates
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-fade-in-delay">
        © 2024 Coming Soon. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
