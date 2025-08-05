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

const blogPosts = [
  {
    id: 1,
    title: "Announcing our $5M Seed Round, led by Sequoia",
    date: "Jan 15, 2025",
    excerpt: "We&apos;re excited to announce our seed funding round to accelerate the future of crypto payments.",
    category: "Company",
    background: "from-orange-500 via-yellow-500 to-blue-500",
    icon: "🌍"
  },
  {
    id: 2,
    title: "Introducing PayBin Checkout",
    date: "Dec 20, 2024",
    excerpt: "The simplest way to accept crypto payments with just a few lines of code.",
    category: "Product",
    background: "from-orange-500 via-yellow-500 to-blue-600",
    icon: "🔑"
  },
  {
    id: 3,
    title: "Build SaaS with PayBin using our API, Webhooks & OAuth",
    date: "Dec 10, 2024",
    excerpt: "Learn how to integrate PayBin into your SaaS application with our comprehensive API documentation.",
    category: "Developer",
    background: "from-red-500 via-orange-500 to-blue-500",
    icon: "⚡"
  },
  {
    id: 4,
    title: "Introducing Digital Products",
    date: "Nov 25, 2024",
    excerpt: "Sell digital products, software licenses, and subscriptions with PayBin&apos;s new digital products feature.",
    category: "Product",
    background: "from-orange-500 via-yellow-500 to-purple-500",
    icon: "📦"
  },
  {
    id: 5,
    title: "John Doe joins PayBin as an advisor",
    date: "Nov 15, 2024",
    excerpt: "We&apos;re thrilled to welcome John Doe as an advisor to help guide our product strategy.",
    category: "Company",
    background: "from-blue-600 via-purple-500 to-pink-500",
    icon: "👨‍💼"
  },
  {
    id: 6,
    title: "Upsell Access to Private Repositories",
    date: "Oct 30, 2024",
    excerpt: "Monetize your open source projects by selling access to private repositories and premium content.",
    category: "Product",
    background: "from-orange-500 via-red-500 to-yellow-500",
    icon: "🔐"
  },
  {
    id: 7,
    title: "Upsell Discord Invites",
    date: "Oct 15, 2024",
    excerpt: "Create exclusive Discord communities and monetize access with PayBin&apos;s Discord integration.",
    category: "Product",
    background: "from-orange-500 via-yellow-500 to-blue-500",
    icon: "🎮"
  }
];

export default function BlogPage() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [postsRef, postsVisible] = useScrollAnimation();

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
              <Link href="/blog" className="text-white font-medium">Blog</Link>
              <Link href="/company" className="text-gray-400 hover:text-white transition-colors">Company</Link>
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
            Blog
          </h1>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className={`pb-20 px-4 sm:px-6 lg:px-8 ${postsVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-black border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                  {/* Colorful Background */}
                  <div className={`relative h-48 bg-gradient-to-br ${post.background} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                        {post.icon}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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