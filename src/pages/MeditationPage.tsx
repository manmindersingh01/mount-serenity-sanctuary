import { useEffect } from "react";
import { MeditationCalendar } from "@/components/MeditationCalendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IncenseSmoke } from "@/components/IncenseSmoke";

const MeditationPage = () => {
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
            Meditation Schedule
          </h1>
          <p className="sacred-text max-w-2xl mx-auto">
            Explore our daily meditation offerings and find the perfect practice to support your spiritual journey.
          </p>
        </div>
        
        {/* Calendar Section */}
        <section className="mb-16">
          <MeditationCalendar />
        </section>
        
        {/* Meditation Styles */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-primary-800 dark:text-primary-200 mb-6 text-center">
            Meditation Styles
          </h2>
          
          <Tabs defaultValue="guided" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="guided">Guided Meditation</TabsTrigger>
              <TabsTrigger value="silent">Silent Meditation</TabsTrigger>
              <TabsTrigger value="movement">Movement Meditation</TabsTrigger>
              <TabsTrigger value="chanting">Chanting Meditation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guided">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Guided Meditation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        In guided meditation, an experienced teacher leads you through a specific practice, offering instructions and support throughout the session. This style is excellent for beginners and those who appreciate structure in their practice.
                      </p>
                      <p className="sacred-text">
                        Our guided sessions incorporate various techniques including breath awareness, body scanning, loving-kindness practice, and visualization.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/guided-meditation.jpg" 
                        alt="Guided Meditation" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="silent">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Silent Meditation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        Silent meditation offers the opportunity to sit in complete stillness, with minimal instruction. These sessions typically begin with brief guidance and then transition into extended periods of silence.
                      </p>
                      <p className="sacred-text">
                        This practice develops concentration, mindfulness, and insight as you observe the natural flow of your experience without interference.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/silent-meditation.jpg" 
                        alt="Silent Meditation" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="movement">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Movement Meditation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        Movement meditation incorporates mindful physical activity into the practice. This includes walking meditation, gentle yoga flows, tai chi, and qigong.
                      </p>
                      <p className="sacred-text">
                        These practices are especially beneficial for those who find stillness challenging or who wish to develop mindfulness in motion that can be integrated into daily activities.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/movement-meditation.jpg" 
                        alt="Movement Meditation" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="chanting">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Chanting Meditation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        Chanting meditation uses sacred sounds, mantras, and music to focus the mind and open the heart. The vibrations created through chanting have a profound effect on our nervous system and consciousness.
                      </p>
                      <p className="sacred-text">
                        Our chanting sessions draw from various traditions, including Tibetan Buddhist mantras, Sanskrit chants, and universal sound meditations.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/chanting-meditation.jpg" 
                        alt="Chanting Meditation" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Teacher Profiles */}
        <section>
          <h2 className="font-display text-2xl text-primary-800 dark:text-primary-200 mb-6 text-center">
            Our Teachers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Teacher 1 */}
            <Card>
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/teacher-tenzin.jpg" 
                  alt="Master Tenzin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  Master Tenzin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text">
                  With over 30 years of meditation experience, Master Tenzin brings deep wisdom from the Tibetan Buddhist tradition. His gentle guidance helps students develop both concentration and compassion.
                </p>
              </CardContent>
            </Card>
            
            {/* Teacher 2 */}
            <Card>
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/teacher-maya.jpg" 
                  alt="Sister Maya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  Sister Maya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text">
                  Sister Maya specializes in loving-kindness and compassion practices. Her background in psychology and mindfulness brings a practical approach to meditation that resonates with beginners.
                </p>
              </CardContent>
            </Card>
            
            {/* Teacher 3 */}
            <Card>
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/teacher-kai.jpg" 
                  alt="Brother Kai" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  Brother Kai
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text">
                  Brother Kai integrates Zen and nature-based practices. His walking meditations and forest bathing sessions help students connect deeply with the natural world as a gateway to inner peace.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeditationPage;