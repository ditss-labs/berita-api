"use client";
import Link from "next/link";
import { useState, useCallback } from "react";
import { ListNews, listNews } from "@/app/utils";
import { DrawerNews } from "./components/DrawerNews";
import { Tweet } from "react-tweet";
import { Github, Star } from "lucide-react";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<ListNews | null>(null);

  const handleNewsClick = useCallback((news: ListNews) => {
    setSelectedNews(news);
    setDrawerOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="flex flex-row w-full justify-between items-center h-20 px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">BIA</span>
            </div>
            <span className="font-bold text-sky-600 text-xl md:text-2xl">
              Berita Indo API
            </span>
          </div>
          
          <Link
            href="https://github.com/satyawikananda/berita-indo-api"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <button 
              aria-label="Star on GitHub"
              className="bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-xl transition-all duration-300 flex flex-row items-center gap-3 group-hover:shadow-lg group-hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">Star on GitHub</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-16">
        <section className="w-full max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                Discover News API
              </span>
              <br />
              <span className="text-gray-900 mt-2 inline-block">
                in Indonesia
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mt-8 max-w-3xl mx-auto leading-relaxed">
              Berita Indo API is a comprehensive public API that provides 
              real-time news from Indonesia&apos;s most popular news portals.
              Perfect for developers building news aggregators, media monitoring, 
              or content analysis tools.
            </p>
          </div>

          {/* News Portal Badges */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Supported News Portals
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {listNews.map((news) => (
                <button
                  key={news.news}
                  onClick={() => handleNewsClick(news)}
                  className="px-5 py-3 bg-white border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100 transition-all duration-300 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  aria-label={`View details for ${news.news}`}
                >
                  <span className="text-gray-800 font-medium">{news.news}</span>
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Click on any portal to view API endpoints and details
            </p>
          </div>

          {/* Testimonial/Tweet Section */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                What Developers Say
              </h3>
              <div className="flex justify-center">
                <Tweet id="1685260678226173952" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-center md:text-left">
              <p className="text-sm">
                © 2023 Berita Indo API. All rights reserved.
              </p>
              <p className="text-sm mt-1">
                Made with ❤️ for the Indonesian developer community
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://twitter.com/satya_wikananda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium"
              >
                @satya_wikananda
              </Link>
              
              <Link
                href="https://trakteer.id/satya-wikananda"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium"
              >
                <span className="relative">
                  Support me here
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
                <span className="text-lg">🥤</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Drawer Component */}
      <DrawerNews 
        open={drawerOpen} 
        onOpenChange={setDrawerOpen} 
        data={selectedNews} 
      />
    </div>
  );
}
