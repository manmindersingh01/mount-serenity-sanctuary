import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MandalaNavigation } from "@/components/MandalaNavigation";
import { IncenseSmoke } from "@/components/IncenseSmoke";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-spiritual overflow-hidden">
        <IncenseSmoke position="left" />
        <IncenseSmoke position="right" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="font-display text-4xl md:text-6xl text-primary-800 dark:text-primary-200 mb-6 text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mount Serenity Sanctuary
            </motion.h1>
            
            <motion.p 
              className="sacred-text text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A sacred space for spiritual growth, meditation, and inner peace in the heart of the mountains.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/meditation">
                <Button className="btn-primary">Explore Meditation Schedule</Button>
              </Link>
              <Link to="/silent-retreat">
                <Button className="btn-outline">Discover Retreats</Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
        </div>
      </section>
      
      {/* Mandala Navigation Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-primary-800 dark:text-primary-200 mb-4">
              Begin Your Journey
            </h2>
            <p className="sacred-text max-w-2xl mx-auto">
              Explore the different paths to peace and enlightenment offered at Mount Serenity Sanctuary.
            </p>
          </div>
          
          <MandalaNavigation />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl text-primary-800 dark:text-primary-200 mb-4">
                Our Sanctuary
              </h2>
              <p className="sacred-text mb-6">
                Nestled in the serene mountains, Mount Serenity Sanctuary was established in 1978 as a place of refuge for those seeking spiritual growth and inner peace.
              </p>
              <p className="sacred-text mb-6">
                Our sanctuary combines ancient wisdom traditions with modern mindfulness practices, creating a unique environment where visitors can disconnect from the noise of everyday life and reconnect with their true nature.
              </p>
              <p className="sacred-text">
                Whether you join us for a day visit, a meditation class, or an extended silent retreat, you'll find a supportive community and sacred space to deepen your practice.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/images/sanctuary-view.jpg" 
                alt="Mount Serenity Sanctuary" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Programs Section */}
      <section className="py-16 bg-gradient-meditation">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-primary-800 dark:text-primary-200 mb-4">
              Featured Programs
            </h2>
            <p className="sacred-text max-w-2xl mx-auto">
              Discover our most popular offerings to support your spiritual journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="card-meditation">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="/images/daily-meditation.jpg" 
                  alt="Daily Meditation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-spiritual text-xl mb-2">Daily Meditation</h3>
              <p className="sacred-text mb-4">
                Join our community for daily guided meditation sessions led by experienced teachers.
              </p>
              <Link to="/meditation">
                <Button className="btn-outline w-full">View Schedule</Button>
              </Link>
            </div>
            
            {/* Program 2 */}
            <div className="card-meditation">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="/images/silent-retreat.jpg" 
                  alt="Silent Retreats" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-spiritual text-xl mb-2">Silent Retreats</h3>
              <p className="sacred-text mb-4">
                Experience the profound transformation that comes from extended periods of silence and contemplation.
              </p>
              <Link to="/silent-retreat">
                <Button className="btn-outline w-full">Explore Retreats</Button>
              </Link>
            </div>
            
            {/* Program 3 */}
            <div className="card-meditation">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="/images/wisdom-teachings.jpg" 
                  alt="Wisdom Teachings" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-spiritual text-xl mb-2">Wisdom Teachings</h3>
              <p className="sacred-text mb-4">
                Study ancient texts and receive guidance from teachers in our wisdom tradition.
              </p>
              <Link to="/wisdom-library">
                <Button className="btn-outline w-full">Browse Library</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-primary-800 dark:text-primary-200 mb-4">
              Voices of Transformation
            </h2>
            <p className="sacred-text max-w-2xl mx-auto">
              Hear from those who have experienced the sanctuary's profound impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface p-6 rounded-lg border border-border">
              <p className="sacred-text italic mb-4">
                "My week at Mount Serenity transformed my relationship with silence. In the quiet, I found a voice within me that I had never heard before—wise, compassionate, and clear."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-primary">SM</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">Weekend Retreat Participant</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-surface p-6 rounded-lg border border-border">
              <p className="sacred-text italic mb-4">
                "After years of seeking, I found a spiritual home at Mount Serenity. The combination of ancient wisdom and practical guidance has helped me navigate life's challenges with greater ease and clarity."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-primary">JT</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">James T.</p>
                  <p className="text-sm text-muted-foreground">Monthly Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl mb-6">Begin Your Journey Today</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-100">
            Whether you're seeking peace, purpose, or spiritual growth, Mount Serenity Sanctuary welcomes you with open arms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/meditation">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Meditation Schedule
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary-100 text-primary-100 hover:bg-primary-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;