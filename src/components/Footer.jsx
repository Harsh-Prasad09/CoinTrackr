// src/components/Footer.jsx
import React from 'react'
import { Home, Github, ExternalLink } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-sky-100 border-t border-slate-200 mt-16 md:mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-3 md:mb-4">
              <img src="/CoinTrackr-LOGO.png" alt="CoinTrackr logo" className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-lg md:text-xl font-bold text-indigo-700">CoinTrackr</span>
            </div>
            <p className="text-left text-gray-800 mb-4 max-w-md text-sm md:text-base">
              Your comprehensive cryptocurrency market analysis platform. 
              Track, analyze, and stay updated with real-time market data and insights for informed investment decisions.
            </p>

            {/* Social Icons (original SVGs preserved) */}
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/iam_harsh45/" target="_blank" rel="noreferrer"
                 className="text-gray-700 hover:text-red-600 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/Harshpr45432223" target="_blank" rel="noreferrer"
                 className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="X">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21l-6.6 7.545L22 22h-6.8l-4.8-6.24L4.8 22H2l7.2-8.273L2 2h6.8l4.4 5.76L18.244 2zm-1.2 18h1.855L8.4 4H6.545l10.5 16z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/harsh-prasad09/" target="_blank" rel="noreferrer"
                 className="text-gray-700 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.336-.027-3.056-1.862-3.056-1.863 0-2.148 1.454-2.148 2.959v5.701h-3v-11h2.879v1.501h.041c.401-.761 1.379-1.562 2.839-1.562 3.037 0 3.6 2.001 3.6 4.604v6.457z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 pb-3">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-700 hover:text-indigo-600">
                <span>Home</span>
                <Home className="w-4 h-4" />
              </a>
              <a href="https://docs.coingecko.com/reference/introduction" target="_blank" rel="noreferrer"
                 className="flex items-center justify-center space-x-2 text-gray-700 hover:text-indigo-600">
                <span>CoinGecko API</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"
                 className="flex items-center justify-center space-x-2 text-gray-700 hover:text-indigo-600">
                <span>GitHub</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-400 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3">

          {/* Left - Copyright */}
          <div className="text-left text-gray-800 text-sm">
            © {year} CoinTrackr. All rights reserved.
          </div>

          {/* Right - Contact */}
          <div className="text-sm">
            <a href="mailto:harshprasad0815@gmail.com" className="text-gray-800 hover:text-indigo-600 transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-center text-navy-200 text-sm">
          <span className="font-bold text-navy-200">Disclaimer: </span>This project is for demonstration purposes only.
        </div>
      </div>
    </footer>
  )
}

export default Footer
