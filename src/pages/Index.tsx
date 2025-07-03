
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Leaf, Apple, Heart, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen relative overflow-hidden" style={{ background: `linear-gradient(135deg, #16A34A 0%, #000000 50%, #16A34A 100%)` }}>
      {/* Simple Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            <div 
              className="w-4 h-4 sm:w-6 sm:h-6 rounded-lg"
              style={{ backgroundColor: '#AFF912' }}
            ></div>
          </div>
        ))}
      </div>

      {/* Food Icons */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`apple-${i}`}
            className="absolute opacity-15"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 8}%`,
            }}
          >
            <Apple 
              style={{ color: '#FFFF' }}
              size={window.innerWidth < 768 ? 12 : 16}
            />
          </div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute opacity-15"
            style={{
              left: `${20 + i * 15}%`,
              top: `${25 + i * 12}%`,
            }}
          >
            <Leaf 
              style={{ color: '#AFF912' }}
              size={window.innerWidth < 768 ? 10 : 14}
            />
          </div>
        ))}
      </div>

      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#AFF912' }}
        ></div>
        <div 
          className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-60 h-60 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl opacity-8"
          style={{ backgroundColor: '#16A34A' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-12"
          style={{ backgroundColor: '#FFFF' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="relative">
              <Apple 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4"
                style={{ color: '#AFF912' }}
              />
              <Heart 
                className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 absolute -top-1 -right-1 sm:-top-2 sm:-right-2" 
                style={{ color: '#16A34A' }}
                fill="currentColor" 
              />
              <Sparkles 
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 absolute -bottom-1 -left-1"
                style={{ color: '#FFFF' }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 sm:mb-6 leading-tight">
            <span 
              className="block"
              style={{ color: '#AFF912' }}
            >
              Coming
            </span>
            <span style={{ color: '#FFFF' }} className="block">
              Soon
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0" style={{ color: '#FFFF' }}>
            We're preparing something <span style={{ color: '#AFF912' }} className="font-semibold">fresh</span> and <span style={{ color: '#16A34A' }} className="font-semibold">nutritious</span>. Get ready for a healthy lifestyle revolution that will nourish your body and soul.
          </p>

          {/* Progress Bar */}
          <div className="mb-8 sm:mb-12 max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
            <div className="flex justify-between text-xs sm:text-sm mb-2" style={{ color: '#FFFF' }}>
              <span>Progress</span>
              <span>85%</span>
            </div>
            <div className="w-full rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm border" style={{ backgroundColor: 'rgba(22, 163, 74, 0.3)', borderColor: '#AFF912' }}>
              <div 
                className="h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: '85%',
                  background: `linear-gradient(90deg, #AFF912 0%, #16A34A 50%, #FFFF 100%)`
                }}
              ></div>
            </div>
          </div>

          {/* Email Subscription Card */}
          <Card className="max-w-xs sm:max-w-md mx-auto p-4 sm:p-6 md:p-8 backdrop-blur-xl border hover:border-opacity-50 transition-all duration-300 shadow-2xl" style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', borderColor: '#AFF912' }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6" style={{ color: '#FFFF' }}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span className="font-semibold text-sm sm:text-base md:text-lg">Be the first to know</span>
                <Sparkles 
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  style={{ color: '#AFF912' }}
                />
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 backdrop-blur-sm text-sm sm:text-base transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: '#16A34A',
                    color: '#FFFF'
                  }}
                  required
                />
                <Button 
                  type="submit"
                  className="transition-all duration-300 hover:scale-105 text-sm sm:text-base px-6 py-2 sm:px-4 sm:py-2 font-semibold"
                  style={{ 
                    background: `linear-gradient(135deg, #AFF912 0%, #16A34A 100%)`,
                    color: '#000000'
                  }}
                >
                  Notify Me
                </Button>
              </div>
            </form>
          </Card>

          {/* Features Preview */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-0">
            {[
              { icon: Leaf, title: "Natural", desc: "100% organic ingredients", color: '#AFF912' },
              { icon: Apple, title: "Fresh", desc: "Farm-to-table freshness", color: '#FFFF' },
              { icon: Heart, title: "Healthy", desc: "Nutritious lifestyle choices", color: '#16A34A' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border hover:border-opacity-70 transition-all duration-300 shadow-xl"
                style={{
                  backgroundColor: 'rgba(22, 163, 74, 0.1)',
                  borderColor: feature.color,
                }}
              >
                <div className="relative mb-3 sm:mb-4">
                  <feature.icon 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto relative z-10"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3" style={{ color: '#FFFF' }}>{feature.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#FFFF', opacity: 0.8 }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 sm:mt-16 flex justify-center space-x-6">
            <div 
              className="text-xs sm:text-sm"
              style={{ color: '#AFF912' }}
            >
              Follow us for updates
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm" style={{ color: '#FFFF', opacity: 0.7 }}>
        © 2024 Coming Soon. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
