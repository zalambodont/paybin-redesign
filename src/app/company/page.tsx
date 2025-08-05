"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
};

export default function CompanyPage() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [principlesRef, principlesVisible] = useScrollAnimation();
  const [teamRef, teamVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/paybin-logo-white.svg"
                  alt="PayBin"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/company" className="text-white font-medium">Company</Link>
            </div>

            {/* CTA Button */}
            <a
              href="https://portfolio.paybin.io/auth/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className={`py-20 px-4 sm:px-6 lg:px-8 ${heroVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
            PayBin Software Inc.
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            We're building the simplest payment platform for future one-developer unicorns
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 ${aboutVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-300 mb-8">About</h2>
          
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              <strong className="text-gray-300">It's never been easier to build software.</strong> From open source having pushed the envelope of developer velocity to AI now accelerating the trend and making software development accessible to more people.
            </p>
            
            <p>
              <strong className="text-gray-300">It's never been easier to ship and scale software.</strong> Cloud platforms and modern PaaS solutions like Vercel and Supabase have drastically simplified global software deployment and scaling.
            </p>
            
            <p>
              <strong className="text-gray-300">But, it's never been harder to monetize software.</strong> We've moved from one-time purchases to SaaS, and now toward usage-based and agentic payments. Each evolution has enabled new category defining businesses, but also added complexity and billing anxiety for developers and their customers alike.
            </p>
            
            <p>
              This is a bottleneck for the future.
            </p>
            
            <p>
              <strong className="text-gray-300">We believe the next unicorns will be created by individual developers.</strong> As lines blur between indie hackers, startups, and enterprises, we're building PayBin to empower solo builders and early-stage startups – the future enterprises, without the headcount. How?
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Monetization vs. Billing Platform</h3>
                <p className="text-gray-400">Billing is a crucial part of your customer relationship, but only a part of it - it's the outcome vs. input. We aim to bridge the gap between product analytics, CRM, and billing, providing a comprehensive platform for one-developer unicorns to scale their businesses.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Usage-based on Autopilot</h3>
                <p className="text-gray-400">Automatic event ingestion for crypto payments, API usage tracking and more – easily track, credit and bill customers for their usage. We're going to ship a lot of innovative features in this category to make usage-based and agentic payments a delight for developers and their customers.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Zero Boilerplate</h3>
                <p className="text-gray-400">We obsess over reducing the lines of code in your codebase that aren't unique to your business, from automating common SaaS entitlements like license keys and usage-based credits to condensing integrations down to just four lines of code.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Zero Operations</h3>
                <p className="text-gray-400">Grow globally without being held back by international sales tax, compliance, fraud, or chargeback protection – leave it all to us as your merchant of record.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Open Source</h3>
                <p className="text-gray-400">Built for transparency and designed for contributions to shape the future with our community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section ref={principlesRef} className={`py-20 px-4 sm:px-6 lg:px-8 ${principlesVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-300 mb-12">Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-300">Momentum is Culture</h3>
              <p className="text-gray-400 leading-relaxed">
                From experience, we're not big on cultural values. Why? People and their actions define culture, not words. People show up excited and at their best when there is momentum. So we've seen at earlier startups that cultural values are a snapshot of when teams hit their strides.
              </p>
              <p className="text-gray-400 leading-relaxed">
                So we focus on keeping, celebrating and accelerating momentum. Allowing culture to be continuously improved and fluid vs. fixed.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-300">Ship → Refactor → Scale</h3>
              <p className="text-gray-400 leading-relaxed">
                Our #1 focus and drive is shipping and growing great product experiences that solves real problems for developers and their users. We celebrate pragmatic duct taping behind the scenes and consider scalability, performance and optimization efforts a reward, not our initial focus.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-300">Reduce complexity, not quality</h3>
              <p className="text-gray-400 leading-relaxed">
                We seek to constantly move faster, but not at the cost of poor product experiences. Simplicity and opinionated iterations vs. perfection are key to enable this and we prioritize it across everything we do. Autonomy and accountability vs. processes. Opinionated design vs. 10 A/B tests.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-300">Do your life's work</h3>
              <p className="text-gray-400 leading-relaxed">
                We're not a 9-5 nor 24/7. We don't track time nor search for people who count it down. We love to work and pour our heart into what we build to continuously push the envelope of our creativity and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 ${teamVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-300 mb-12">PayBin Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Founder & CEO</h3>
              <p className="text-gray-400">Leading the vision and strategy</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">CTO</h3>
              <p className="text-gray-400">Building the future of payments</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">👨‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Head of Design</h3>
              <p className="text-gray-400">Creating beautiful experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 PayBin Software Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 