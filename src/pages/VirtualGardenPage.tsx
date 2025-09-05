import { useEffect } from "react";
import { VirtualGardenTour } from "@/components/VirtualGardenTour";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IncenseSmoke } from "@/components/IncenseSmoke";

const VirtualGardenPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <IncenseSmoke position="center" />
          <h1 className="font-display text-4xl text-primary-800 dark:text-primary-200 mb-4">
            Virtual Garden Tour
          </h1>
          <p className="sacred-text max-w-2xl mx-auto">
            Explore the sacred grounds of Mount Serenity Sanctuary from wherever you are. Click on meditation spots to learn about special places for practice.
          </p>
        </div>
        
        {/* Virtual Tour */}
        <section className="mb-16">
          <VirtualGardenTour />
        </section>
        
        {/* Garden Philosophy */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-2xl text-primary-800 dark:text-primary-200 text-center">
                Our Garden Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="sacred-text mb-4">
                    At Mount Serenity Sanctuary, our gardens are more than beautiful spaces—they are living teachers of dharma. Each garden area is designed to embody specific spiritual principles and to create environments conducive to different meditation practices.
                  </p>
                  <p className="sacred-text mb-4">
                    We follow sustainable and mindful gardening practices, working in harmony with nature rather than imposing our will upon it. Our gardeners practice their work as a form of meditation, bringing full presence to each task.
                  </p>
                  <p className="sacred-text">
                    The gardens change with the seasons, teaching us about impermanence, cycles of growth and rest, and the inherent wisdom of natural processes. We invite visitors to experience these spaces with all their senses and to allow the gardens to be their teachers.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/garden-philosophy-1.jpg" 
                      alt="Garden Philosophy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/garden-philosophy-2.jpg" 
                      alt="Garden Philosophy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/garden-philosophy-3.jpg" 
                      alt="Garden Philosophy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/garden-philosophy-4.jpg" 
                      alt="Garden Philosophy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Garden Meditation Practices */}
        <section>
          <h2 className="font-display text-2xl text-primary-800 dark:text-primary-200 mb-6 text-center">
            Garden Meditation Practices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Practice 1 */}
            <Card className="card-meditation">
              <CardHeader>
                <CardTitle className="heading-spiritual">
                  Walking Meditation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text mb-4">
                  Walking meditation involves moving very slowly and mindfully, coordinating your steps with your breath. This practice helps develop concentration while in motion.
                </p>
                <p className="text-sm text-muted-foreground">
                  Best locations: Cedar Grove Path, Stone Labyrinth
                </p>
              </CardContent>
            </Card>
            
            {/* Practice 2 */}
            <Card className="card-meditation">
              <CardHeader>
                <CardTitle className="heading-spiritual">
                  Nature Awareness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text mb-4">
                  This practice involves opening your awareness to the sights, sounds, smells, and sensations of the natural world. It cultivates presence and interconnection.
                </p>
                <p className="text-sm text-muted-foreground">
                  Best locations: Mountain Overlook, Lotus Pond
                </p>
              </CardContent>
            </Card>
            
            {/* Practice 3 */}
            <Card className="card-meditation">
              <CardHeader>
                <CardTitle className="heading-spiritual">
                  Contemplative Sitting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text mb-4">
                  Find a comfortable seat in the garden and practice traditional sitting meditation, using the natural environment as support for your awareness.
                </p>
                <p className="text-sm text-muted-foreground">
                  Best locations: Zen Rock Garden, Prayer Flag Meadow
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VirtualGardenPage;