import React, { useEffect, useState } from 'react';
import { Code2, Heart, Share2, Users, Calendar, ArrowRight, Star, Send, Globe2, Sparkles, Code, Rocket } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  description: string;
  user: {
    name: string;
    profile_image: string;
  };
  positive_reactions_count: number;
  comments_count: number;
  url: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2020',
      title: 'The Spark Begins',
      description: 'From a single voice to a movement, WeCoded emerged to redefine tech diversity.'
    },
    {
      year: '2021',
      title: 'Breaking Barriers',
      description: 'Expanded globally, connecting developers across 50+ countries and cultures.'
    },
    {
      year: '2022',
      title: 'Community Revolution',
      description: 'Surpassed 500+ transformative stories, each one breaking stereotypes in tech.'
    },
    {
      year: '2023',
      title: 'Innovation Catalyst',
      description: 'Launched groundbreaking mentorship programs with industry leaders.'
    },
    {
      year: '2024',
      title: 'Tech Excellence',
      description: 'Recognized globally for pioneering inclusive tech innovation.'
    }
  ];

  useEffect(() => {
    fetch('https://dev.to/api/articles?tag=wecoded')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4531EA] via-[#9D00E5] to-[#CCEA71]">
      {/* Hero Section */}
      <header className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#CCEA71]" />
            <h1 className="text-7xl font-bold text-white">
              WeCoded <span className="text-[#CCEA71]">2025</span>
            </h1>
            <Sparkles className="w-8 h-8 text-[#CCEA71]" />
          </div>
          <p className="text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Where Innovation Meets Inclusion
          </p>
          <p className="text-xl text-[#CCEA71] mb-8 max-w-2xl mx-auto">
            Join a revolutionary movement reshaping the future of tech through diverse voices, 
            groundbreaking ideas, and unstoppable innovation.
          </p>
          <div className="flex justify-center gap-12 mb-12">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Code className="w-14 h-14 text-white mb-3 mx-auto" />
              <p className="text-white text-lg font-medium">Innovative Code</p>
              <p className="text-white/80 text-sm">Breaking barriers</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="w-14 h-14 text-white mb-3 mx-auto" />
              <p className="text-white text-lg font-medium">Global Community</p>
              <p className="text-white/80 text-sm">United in tech</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Rocket className="w-14 h-14 text-white mb-3 mx-auto" />
              <p className="text-white text-lg font-medium">Future Leaders</p>
              <p className="text-white/80 text-sm">Shaping tomorrow</p>
            </div>
          </div>
          <a 
            href="#submit"
            className="inline-flex items-center px-8 py-4 bg-[#CCEA71] text-[#4531EA] rounded-full font-semibold hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Share Your Innovation <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Impact Numbers */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
            <Globe2 className="w-14 h-14 text-[#CCEA71] mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">50+</h3>
            <p className="text-white/80 text-lg">Nations United</p>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
            <Users className="w-14 h-14 text-[#CCEA71] mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">1000+</h3>
            <p className="text-white/80 text-lg">Innovators</p>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
            <Heart className="w-14 h-14 text-[#CCEA71] mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">50K+</h3>
            <p className="text-white/80 text-lg">Inspirations</p>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
            <Star className="w-14 h-14 text-[#CCEA71] mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">100+</h3>
            <p className="text-white/80 text-lg">Tech Partners</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Pioneering Change</h2>
          <p className="text-xl text-white/80 mb-12 text-center max-w-3xl mx-auto">
            Our journey of innovation, inclusion, and impact in the tech industry
          </p>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-36 h-36 flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-300">
                  <span className="text-3xl font-bold text-[#CCEA71]">{event.year}</span>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-2xl transform hover:translate-x-2 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-white/80 text-lg">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 px-4 bg-white/10 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Innovation Stories
          </h2>
          <p className="text-xl text-white/80 mb-12 text-center max-w-3xl mx-auto">
            Discover groundbreaking perspectives and transformative journeys from tech's rising stars
          </p>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={post.user.profile_image}
                        alt={post.user.name}
                        className="w-14 h-14 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900 text-lg">{post.user.name}</h3>
                        <p className="text-gray-600">Innovator</p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-gray-600">
                          <Heart className="w-5 h-5 mr-1" />
                          {post.positive_reactions_count}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <Share2 className="w-5 h-5 mr-1" />
                          {post.comments_count}
                        </span>
                      </div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4531EA] hover:text-[#9D00E5] font-medium flex items-center"
                      >
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit Your Story Section */}
      <section id="submit" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <Send className="w-20 h-20 text-[#CCEA71] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Be the Next Innovation</h2>
          <p className="text-xl text-white/80 mb-8">
            Your unique perspective could spark the next revolution in tech. 
            Share your story and inspire the future generation of innovators.
          </p>
          <a 
            href="https://dev.to/new/wecoded"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#CCEA71] text-[#4531EA] rounded-full font-semibold hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Begin Your Story <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4531EA]/20 backdrop-blur-lg py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white mb-6 text-lg">
            Crafted with 💜 by Shruti Adhav for the DEV Challenges
          </p>
          <div className="flex justify-center space-x-8">
            <a href="https://dev.to/about" className="text-[#CCEA71] hover:text-white transition-colors text-lg">
              About
            </a>
            <a href="https://dev.to/new/wecoded" className="text-[#CCEA71] hover:text-white transition-colors text-lg">
              Submit Your Story
            </a>
            <a href="https://dev.to/challenges" className="text-[#CCEA71] hover:text-white transition-colors text-lg">
              Resources
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;