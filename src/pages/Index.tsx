
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Leaf, Apple, Heart } from 'lucide-react';

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-lime-900">
      {/* Animated Background Particles - Food Icons */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Apple 
              className="text-white/20" 
              size={Math.random() * 12 + 6} 
            />
          </div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Leaf 
              className="text-white/15" 
              size={Math.random() * 10 + 8} 
            />
          </div>
        ))}
      </div>

      {/* Floating Orbs - Food Theme Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-orange-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Logo/Icon */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <Apple className="w-16 h-16 text-white mx-auto mb-4 animate-bounce" />
              <Heart className="w-6 h-6 text-red-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Coming
            </span>
            <br />
            <span className="text-white hover-scale inline-block transition-transform duration-300">
              Soon
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're preparing something fresh and nutritious. Get ready for a healthy lifestyle revolution that will nourish your body and soul.
          </p>

          {/* Progress Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-lime-500 h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Email Subscription */}
          <Card className="max-w-md mx-auto p-6 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-2 text-white mb-4">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Be the first to know</span>
              </div>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 transition-all duration-300 hover:scale-105"
                >
                  Notify Me
                </Button>
              </div>
            </form>
          </Card>

          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Leaf, title: "Natural", desc: "100% organic ingredients" },
              { icon: Apple, title: "Fresh", desc: "Farm-to-table freshness" },
              { icon: Heart, title: "Healthy", desc: "Nutritious lifestyle choices" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <div className="text-gray-400 text-sm">
              Follow us for updates
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
        © 2024 Coming Soon. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
