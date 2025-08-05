"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("api");
  const [activeFaqItem, setActiveFaqItem] = useState("licenseKeys");

  const faqItems = [
    {
      id: "licenseKeys",
      title: "License Keys",
      subtitle: "Sell access to your software with the License Key benefit",
      key: "a792ea93-fb5c-43f2-a3d7-5afe5a7fe668",
      description: "Automatically generate and deliver license keys to customers upon successful payment. Supports various license formats and can integrate with your existing software licensing system.",
      leftContent: {
        title: "License Key Generated",
        subtitle: "Your software license is ready",
        background: "from-green-500/20 to-emerald-500/20",
        icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
      }
    },
    {
      id: "digitalDownloads",
      title: "Digital Downloads",
      subtitle: "Automatically deliver digital files to customers",
      key: "b893fb04-gc6d-54g3-b4e8-6bf6b8gf779",
      description: "Instantly deliver digital products like e-books, software, music, or video files to customers after payment confirmation. Supports multiple file formats and secure download links.",
      leftContent: {
        title: "Download Ready",
        subtitle: "Your digital product is available",
        background: "from-blue-500/20 to-cyan-500/20",
        icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      }
    },
    {
      id: "githubAccess",
      title: "GitHub Repository Access",
      subtitle: "Grant access to private GitHub repositories",
      key: "c904gc15-hd7e-65h4-c5f9-7cg7c9hg880",
      description: "Automatically invite customers to private GitHub repositories or organizations upon payment. Perfect for selling access to source code, documentation, or exclusive content.",
      leftContent: {
        title: "Repository Access Granted",
        subtitle: "You now have access to the codebase",
        background: "from-purple-500/20 to-pink-500/20",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      }
    },
    {
      id: "discordAccess",
      title: "Discord Server Access",
      subtitle: "Automatically invite customers to Discord servers",
      key: "d015hd26-ie8f-76i5-d6g0-8dh8d0ih991",
      description: "Instantly invite customers to Discord servers with specific roles and permissions. Great for creating exclusive communities, support channels, or premium member areas.",
      leftContent: {
        title: "Discord Invitation Sent",
        subtitle: "Welcome to the community",
        background: "from-indigo-500/20 to-blue-500/20",
        icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      }
    },
    {
      id: "customBenefit",
      title: "Custom Benefit",
      subtitle: "Create your own custom automated benefits",
      key: "e126ie37-jf9g-87j6-e7h1-9ei9e1ji002",
      description: "Build custom automated benefits using webhooks and API integrations. Connect to any third-party service, send emails, create accounts, or trigger any action when customers make a purchase.",
      leftContent: {
        title: "Custom Action Triggered",
        subtitle: "Your personalized benefit is active",
        background: "from-orange-500/20 to-red-500/20",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      }
    }
  ];

  const toggleItem = (itemKey: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey as keyof typeof prev]
    }));
  };

  const tabs = [
    { id: "api", label: "API Reference" },
    { id: "quickstart", label: "Quickstart" },
    { id: "auth", label: "Authentication" },
    { id: "resources", label: "All Resources", href: "https://developers.paybin.io/" }
  ];

  const tabContent = {
    api: {
      title: "API Reference",
      description: "Discover everything you need to know about PayBin and seamlessly integrate PayBin's features into your product.",
      features: [
        "Secure & Simple Integration",
        "Comprehensive API Documentation", 
        "Multiple Cryptocurrency Support",
        "Real-time Transaction Tracking"
      ],
      code: `// Initialize PayBin API
const paybin = new PayBin({
  apiKey: 'pk_live_xxx',
  webhookSecret: 'whsec_xxx'
});

// Create payment request
const payment = await paybin.createPayment({
  amount: 1000,
  currency: 'usd',
  customerId: 'john_doe_123'
});`
    },
    quickstart: {
      title: "Quickstart Guide",
      description: "Get started with PayBin in minutes. Follow this simple guide to integrate crypto payments into your application.",
      features: [
        "Step-by-step Integration",
        "Code Examples",
        "Testing Environment",
        "Production Deployment"
      ],
      code: `// 1. Install PayBin SDK
npm install @paybin/sdk

// 2. Initialize with your API key
import { PayBin } from '@paybin/sdk';

const paybin = new PayBin({
  apiKey: process.env.PAYBIN_API_KEY
});

// 3. Create your first payment
const payment = await paybin.createPayment({
  amount: 2500,
  currency: 'usd'
});`
    },
    auth: {
      title: "Authentication",
      description: "Learn how to securely authenticate your requests with PayBin's API using API keys and webhook signatures.",
      features: [
        "API Key Authentication",
        "Webhook Signature Verification",
        "Request Signing",
        "Security Best Practices"
      ],
      code: `// Generate API key signature
const signature = crypto
  .createHmac('sha256', webhookSecret)
  .update(payload)
  .digest('hex');

// Verify webhook signature
const isValid = crypto.timingSafeEqual(
  Buffer.from(signature, 'hex'),
  Buffer.from(receivedSignature, 'hex')
);`
    },
    resources: {
      title: "All Resources",
      description: "Explore all available PayBin resources including documentation, SDKs, and integration guides.",
      features: [
        "Complete API Documentation",
        "SDK Libraries",
        "Integration Guides",
        "Community Support"
      ],
      code: `// Available SDKs
npm install @paybin/node
npm install @paybin/react
npm install @paybin/vue

// Documentation
https://developers.paybin.io
https://docs.paybin.io/api`
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/paybin-logo-white.svg"
                alt="PayBin"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#integration" className="text-gray-300 hover:text-white transition-colors">
                Integration
              </a>
              <a href="https://developers.paybin.io" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                API Docs
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-400 border border-gray-700">
              Trusted by 10,000+ businesses worldwide
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
            The simplest way to<br />
            <span className="text-gray-500">accept payments</span>
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Start accepting payments in minutes. No complex setup, no hidden fees. 
            Just simple, secure payments for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-800 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 font-mono">
              Start now — it's free
            </button>
            <button className="border border-gray-600 text-gray-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-gray-400 font-mono">
              View Demo
            </button>
          </div>
          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-600 font-mono">
            <span>✓ No setup fees</span>
            <span>✓ No monthly fees</span>
            <span>✓ No hidden costs</span>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              All the tools you need to accept payments and grow your business anywhere on the planet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[16rem] gap-4">
            {/* Fast & Secure Payments - Large Card */}
            <div className="feature-card group relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-md dark:shadow-none p-6 flex flex-col justify-end transform-gpu transition-all duration-300 lg:col-span-2 lg:row-span-2">
              <div className="relative mb-4 w-full aspect-[4/3] overflow-hidden rounded-lg lg:hidden">
                <img src="/images/real-time-analytics-dashboard-tilted.avif" alt="Fast & Secure Payments" className="w-full h-full object-contain"/>
              </div>
              <div className="hidden lg:flex absolute inset-0 z-0 items-center justify-center">
                <div className="w-72 h-72 bg-contain bg-no-repeat bg-center transition-transform duration-500 ease-out group-hover:scale-105" style={{backgroundImage: "url(/images/real-time-analytics-dashboard-tilted.avif)", backgroundSize: "contain"}}></div>
              </div>
              <div className="absolute top-6 left-6 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-28 h-28 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <div className="relative z-10 text-black dark:text-white">
                <h3 className="text-lg font-semibold">Fast & Secure Payments</h3>
                <p className="text-sm mt-1">Accepting crypto payments with our dedicated gateway.</p>
              </div>
              <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5 group-hover:dark:bg-white/5"></div>
            </div>

            {/* Instant Setup */}
            <div className="feature-card group relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-md dark:shadow-none p-6 flex flex-col justify-end transform-gpu transition-all duration-300">
              <div className="absolute top-6 left-6 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-28 h-28 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div className="relative z-10 text-black dark:text-white">
                <h3 className="text-lg font-semibold">Instant Setup</h3>
                <p className="text-sm mt-1">Get started in minutes with our simple integration. No complex setup required.</p>
              </div>
              <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5 group-hover:dark:bg-white/5"></div>
            </div>

            {/* Recurring Payments */}
            <div className="feature-card group relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-md dark:shadow-none p-6 flex flex-col justify-end transform-gpu transition-all duration-300">
              <div className="absolute top-6 left-6 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw w-28 h-28 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </div>
              <div className="relative z-10 text-black dark:text-white">
                <h3 className="text-lg font-semibold">Recurring Payments</h3>
                <p className="text-sm mt-1">Set up subscriptions and recurring billing with automated retry logic.</p>
              </div>
              <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5 group-hover:dark:bg-white/5"></div>
            </div>

            {/* Global Payments - Large Card */}
            <div className="feature-card group relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-md dark:shadow-none p-6 flex flex-col justify-end transform-gpu transition-all duration-300 lg:col-span-2 lg:row-span-2">
              <div className="relative mb-4 w-full aspect-[4/3] overflow-hidden rounded-lg lg:hidden">
                <img src="/images/comprehensive-api-integration-tilted.avif" alt="Global Payments" className="w-full h-full object-contain"/>
              </div>
              <div className="hidden lg:flex absolute inset-0 z-0 items-center justify-center">
                <div className="w-72 h-72 bg-contain bg-no-repeat bg-center transition-transform duration-500 ease-out group-hover:scale-105" style={{backgroundImage: "url(/images/comprehensive-api-integration-tilted.avif)", backgroundSize: "contain"}}></div>
              </div>
              <div className="absolute top-6 left-6 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-28 h-28 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="relative z-10 text-black dark:text-white">
                <h3 className="text-lg font-semibold">Global Payments</h3>
                <p className="text-sm mt-1">Accept payments in crypto—globally, instantly, and securely.</p>
              </div>
              <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5 group-hover:dark:bg-white/5"></div>
            </div>

            {/* Secure & Compliant */}
            <div className="feature-card group relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-md dark:shadow-none p-6 flex flex-col justify-end transform-gpu transition-all duration-300">
              <div className="absolute top-6 left-6 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-28 h-28 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <div className="relative z-10 text-black dark:text-white">
                <h3 className="text-lg font-semibold">Secure & Compliant</h3>
                <p className="text-sm mt-1">PCI DSS Level 1 certified with advanced fraud protection built-in.</p>
              </div>
              <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5 group-hover:dark:bg-white/5"></div>
            </div>

            {/* Real-time Analytics */}
            <div className="feature-card group relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-md dark:shadow-none p-6 flex flex-col justify-end transform-gpu transition-all duration-300">
              <div className="absolute top-6 left-6 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart3 w-28 h-28 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400">
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <div className="relative z-10 text-black dark:text-white">
                <h3 className="text-lg font-semibold">Real-time Analytics</h3>
                <p className="text-sm mt-1">Track your payments, revenue, and customer insights in real-time.</p>
              </div>
              <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5 group-hover:dark:bg-white/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-300 mb-4 high-contrast-glow">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-500">
              No setup fees. No monthly fees. No hidden costs. Just pay for what you use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-gray-300 mb-4">Free</div>
              <p className="text-gray-500 mb-6">Perfect for small businesses just getting started</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2.9% + 30¢ per transaction
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to $10,000 monthly volume
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Standard support
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All payment methods
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-700 font-mono">
                Get Started
              </button>
            </div>

            <div className="bg-black border-2 border-gray-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-600 text-gray-300 px-4 py-1 rounded-full text-sm font-medium font-mono">Most popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Growth</h3>
              <div className="text-4xl font-bold text-gray-300 mb-4">$29<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-500 mb-6">For growing businesses with higher volume</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2.5% + 25¢ per transaction
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to $100,000 monthly volume
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom checkout
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Webhook events
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-700 font-mono">
                Start Growth Plan
              </button>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-300 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-500 mb-6">For large businesses with custom needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Volume discounts available
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited monthly volume
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom reporting
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  White-label options
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SLA guarantee
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-700 font-mono">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2 high-contrast-glow">$2M+</div>
              <div className="text-gray-500">Processed annually</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2 high-contrast-glow">99.99%</div>
              <div className="text-gray-500">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2 high-contrast-glow">&lt; 100ms</div>
              <div className="text-gray-500">API response time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2 high-contrast-glow">10,000+</div>
              <div className="text-gray-500">Active businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Support */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-8 high-contrast-glow">Supported Cryptocurrencies</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['bitcoin', 'ethereum', 'binance', 'litecoin', 'optimism', 'tron'].map((crypto) => (
              <div key={crypto} className="text-gray-500 font-medium capitalize font-mono">
                {crypto}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-300 mb-4">
            Start accepting payments today
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Join thousands of businesses using PayBin to accept payments online. 
            No setup fees, no monthly fees, no hidden costs.
          </p>
          <button className="bg-gray-700 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 font-mono">
            Get Started
          </button>
        </div>
      </section>



      {/* Feature Showcase Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Usage Based Billing & Code Example - Merged */}
            <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-800 hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300 ease-in-out lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Usage Based Billing */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-4">Usage Based Billing</h3>
                  <p className="text-gray-500 mb-6">
                    Robust payment processing that enables precise usage-based billing with flexible pricing models.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-400">
                      <span className="mr-3">→</span>
                      <span>Real-time transaction tracking</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="mr-3">→</span>
                      <span>Flexible pricing tiers</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="mr-3">→</span>
                      <span>Automated billing cycles</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="mr-3">→</span>
                      <span>Usage analytics dashboard</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="mr-3">→</span>
                      <span>Webhook notifications</span>
                    </div>
                  </div>
                </div>

                {/* Code Example & User Info */}
                <div>
                  <div className="mb-6">
                    <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-300 mb-4">
                      <div className="text-gray-500">// Initialize PayBin</div>
                      <div className="text-gray-400">const paybin = new PayBin(&#123;</div>
                      <div className="text-gray-400 ml-4">apiKey: &apos;pk_live_xxx&apos;,</div>
                      <div className="text-gray-400 ml-4">webhookSecret: &apos;whsec_xxx&apos;</div>
                      <div className="text-gray-400">&#125;);</div>
                      <div className="text-gray-500 mt-2">// Create payment</div>
                      <div className="text-gray-400">const payment = await paybin.createPayment(&#123;</div>
                      <div className="text-gray-400 ml-4">amount: 1000,</div>
                      <div className="text-gray-400 ml-4">currency: &apos;usd&apos;,</div>
                      <div className="text-gray-400 ml-4">customerId: &apos;john_doe_123&apos;</div>
                      <div className="text-gray-400">&#125;);</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-gray-300">John Doe</div>
                      <div className="text-sm text-gray-500">Premium Plan • Monthly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Products & SaaS Billing */}
            <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-800 hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Digital Products & SaaS Billing</h3>
              <p className="text-gray-500 mb-6">
                Create digital products and SaaS billing with flexible pricing models and seamless payment processing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Digital & Subscription Products</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Multiple Pricing Models</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Discounts, Checkout Links & Benefits</span>
                </div>
              </div>
            </div>

            {/* Benefits Engine */}
            <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-800 hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Benefits Engine</h3>
              <p className="text-gray-500 mb-6">
                Powerful entitlements engine that automates access to various features and benefits.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 px-3 py-2 rounded-lg text-center text-gray-400 text-sm">
                  License Keys
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded-lg text-center text-gray-400 text-sm">
                  Credits
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded-lg text-center text-gray-400 text-sm">
                  Downloadables
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded-lg text-center text-gray-400 text-sm">
                  GitHub Repos
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded-lg text-center text-gray-400 text-sm">
                  Discord Roles
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded-lg text-center text-gray-400 text-sm">
                  Custom
                </div>
              </div>
            </div>

            {/* Customer Management */}
            <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-800 hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Customer Management</h3>
              <p className="text-gray-500 mb-6">
                Streamlined customer lifecycle management with detailed profiles and analytics.
              </p>
              <div className="relative">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 relative top-10 z-30">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-gray-300">John Doe</div>
                      <div className="text-sm text-gray-500">Premium Plan • Monthly</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 absolute top-6 z-20 left-0 right-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Jane Smith</div>
                      <div className="text-sm text-gray-500">Basic Plan • Annual</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 absolute top-2 z-10 left-0 right-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Mike Johnson</div>
                      <div className="text-sm text-gray-500">Enterprise Plan • Monthly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Merchant of Record */}
            <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-800 hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Global Merchant of Record</h3>
              <p className="text-gray-500 mb-6">
                Focus on your passion while we handle all the tax compliance and regulatory requirements.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-300 font-medium">Tax Report 2025</span>
                  <span className="text-green-400 text-sm">Submitted</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>VAT (EU)</span>
                    <span className="text-green-400">€2,450.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sales Tax (US)</span>
                    <span className="text-green-400">$3,120.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-300 mb-4">Integrate in under a minute</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started with PayBin's powerful API and start accepting crypto payments in minutes
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.href) {
                      window.open(tab.href, '_blank');
                    } else {
                      setActiveTab(tab.id);
                    }
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-black rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Section - Features */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-300 mb-4">{currentContent.title}</h3>
                <p className="text-gray-500 mb-6">
                  {currentContent.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {currentContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://developers.paybin.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Right Section - Code Example */}
              <div className="p-8 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 relative">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">JavaScript</span>
                  </div>
                  <div className="font-mono text-sm">
                    {currentContent.code.split('\n').map((line, index) => (
                      <div key={index} className="text-gray-300">
                        {line.includes('//') ? (
                          <span className="text-gray-400">{line}</span>
                        ) : line.includes('const') || line.includes('await') || line.includes('import') ? (
                          <span className="text-blue-400">{line}</span>
                        ) : line.includes("'") || line.includes('"') ? (
                          <span className="text-orange-400">{line}</span>
                        ) : line.includes(':') ? (
                          <span className="text-blue-400">{line}</span>
                        ) : line.includes('npm') || line.includes('https') ? (
                          <span className="text-green-400">{line}</span>
                        ) : (
                          <span className="text-gray-300">{line}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-900">
          {/* Main Quote */}
          <div className="text-center mb-16">
            <div className="text-6xl text-gray-600 mb-8">"</div>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 mb-8 max-w-4xl mx-auto leading-tight">
              The speed at which Polar is executing on the financial infrastructure primitives the new world needs is very impressive
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold text-gray-300">Guillermo Rauch</div>
                <div className="text-sm text-gray-500">CEO & Founder of Vercel</div>
              </div>
            </div>
          </div>

          {/* Marquee Testimonials */}
          <div className="relative overflow-hidden w-full">
            <div className="flex flex-col space-y-6 animate-marquee">
              {/* Row 1 */}
              <div className="flex space-x-6 min-w-max">
                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Andrea Bizzotto</div>
                      <div className="text-sm text-gray-500">@biz84</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I've been integrating Polar recently and had a fantastic experience! Great DX and the team responds to support super quickly!
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">enjie</div>
                      <div className="text-sm text-gray-500">@im_enjie</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I finally tried @polar_sh after all the hype, and it's hands down the smoothest, most developer-friendly, and straightforward payment integration out there.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Samuel Colvin</div>
                      <div className="text-sm text-gray-500">@samuel_colvin</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Amazing! Really excited to seeing how this turns out. Polar is the cutting edge of how open source might be financed in the future.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Linus Ekenstam</div>
                      <div className="text-sm text-gray-500">@LinusEkenstam</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I've been waiting for this so hard. LFG, congratulations on the launch guys!
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Mike Andreuzza</div>
                      <div className="text-sm text-gray-500">@Mike_Andreuzza</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Officially using @polar_sh for payments and lowered prices on Lexington. I also want to thank @birk and the people at Polar for helping me out with the move and adapting the UI to my use case during the move. They are worth their weight in gold.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Jonathan Wilke</div>
                      <div className="text-sm text-gray-500">@jonathan_wilke</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Wow this is just amazing. With @polar_sh I can directly give the customer access to the supastarter repository and invite them to the discord server 🔥
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Bohdan Shulha</div>
                      <div className="text-sm text-gray-500">@b_shulha</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I feel like @polar_sh is @vercel of payments. Keep pushing! 💖
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[380px] h-[300px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">David Parks</div>
                      <div className="text-sm text-gray-500">@dparksdev</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    The @polar_sh plugin for @better_ magic. Automatically creates customers Maps your databases id to an ex reference Creates checkout, portal and we routes for you
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex space-x-6 min-w-max">
                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Steven Tey</div>
                      <div className="text-sm text-gray-500">@steventey</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Open source + great DX + responsive support always wins. If you're selling stuff online and haven't tried @polar_sh yet — 100% recommend doing so!
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Alex Bass</div>
                      <div className="text-sm text-gray-500">@alexhbass</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We switched to @polar_sh because of their killer API, UX, and product. Also love that it's Open-Source. Their team cares A LOT as well. Worth the minor fee difference.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Dmitry Vlasov</div>
                      <div className="text-sm text-gray-500">@vlasov</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Someone here recommended @polar_sh, and I can only say the experience has been very smooth so far.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Filip K</div>
                      <div className="text-sm text-gray-500">@itsfilipk</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    In 8 years as a developer I can't recall having such a smooth onboarding + integration experience as with @polar_sh. Everything from the UI, docs and CLI tool is intuitive and 'just works'. If you are looking to integrate international payments into your business, I can't recommend them enough.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Jim Raptis</div>
                      <div className="text-sm text-gray-500">@d__raptis</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I've migrated the gradients.fm pre-order checkout to @polar_sh 💳 Much quicker to load and has a more beautiful checkout page imo.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Jonathan Bloomfield</div>
                      <div className="text-sm text-gray-500">@Champdebloom</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I spent hours wrestling with Stripe last night and I know it's a skill issue, but @polar_sh's DX is so peak this wouldn't have been a problem. Just waiting on CAD support so I can migrate and it can't come soon enough!
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">Mitchell Hashimoto</div>
                      <div className="text-sm text-gray-500">@mitchellh</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I've joined Polar as an advisor! I think it benefits everyone for devs to have more options to get paid to work on their passions, to support upstreams, and for users to have more confidence/transparency in the software they're supporting/purchasing.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 w-[320px] h-[220px]">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-300">kitze</div>
                      <div className="text-sm text-gray-500">@thekitze</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I just saw the plugin and oh my god
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Dynamic Content */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${faqItems.find(item => item.id === activeFaqItem)?.leftContent.background} rounded-2xl`}></div>
                </div>
                <div className="relative p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={faqItems.find(item => item.id === activeFaqItem)?.leftContent.icon} />
                    </svg>
                    <span className="font-mono text-sm">{faqItems.find(item => item.id === activeFaqItem)?.key}</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {faqItems.find(item => item.id === activeFaqItem)?.leftContent.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {faqItems.find(item => item.id === activeFaqItem)?.leftContent.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - FAQ Navigation */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-300 mb-4">Automated Product Benefits</h2>
                  <p className="text-gray-400 text-lg">
                    Configure automated benefits which are granted to customers when they purchase your products.
                  </p>
                </div>

                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveFaqItem(item.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-colors ${
                        activeFaqItem === item.id
                          ? 'bg-gray-800 border-gray-600'
                          : 'bg-black border-gray-800 hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-300">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.subtitle}</p>
                        </div>
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${activeFaqItem === item.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {activeFaqItem === item.id && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/paybin-logo-white.svg"
                  alt="PayBin Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-gray-400 mb-4">
                PayBin is owned and operated by Flopays UAB. Registration Number 306776864, Žalgirio g. 88-101, 09303 Vilnius
              </p>
              <p className="text-sm text-gray-500">
                © 2025 PayBin. All rights reserved.
              </p>
            </div>

            {/* Product Links */}
            <div className="pl-2 sm:pl-4 md:pl-48">
              <h3 className="font-medium text-gray-300 mb-4">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#features" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@paybin" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="pl-2 sm:pl-4 md:pl-48">
              <h3 className="font-medium text-gray-300 mb-4">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href="https://developers.paybin.io/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="https://status.paybin.io/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="pl-2 sm:pl-4 md:pl-48">
              <h3 className="font-medium text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/legal#terms" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/legal#privacy" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/legal#kyc" className="text-sm text-gray-400 hover:text-gray-300 hover:underline underline-offset-2 transition-colors">
                    KYC/AML
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <a href="https://github.com/paybin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z" />
                  </svg>
                </a>
              </div>
              <div className="text-sm text-gray-500">
                Built with ❤️ for the crypto community
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
