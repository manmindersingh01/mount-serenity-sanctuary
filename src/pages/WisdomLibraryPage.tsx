import { useEffect } from "react";
import { WisdomScroll } from "@/components/WisdomScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IncenseSmoke } from "@/components/IncenseSmoke";

const WisdomLibraryPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <IncenseSmoke position="left" />
          <IncenseSmoke position="right" />
          <h1 className="font-display text-4xl text-primary-800 dark:text-primary-200 mb-4">
            Ancient Wisdom Library
          </h1>
          <p className="sacred-text max-w-2xl mx-auto">
            Explore sacred texts and spiritual teachings from various wisdom traditions. Our digital library offers insights that have guided seekers for centuries.
          </p>
        </div>
        
        {/* Wisdom Scroll */}
        <section className="mb-16">
          <WisdomScroll />
        </section>
        
        {/* Wisdom Traditions */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-primary-800 dark:text-primary-200 mb-6 text-center">
            Wisdom Traditions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tradition 1 */}
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/tradition-buddhist.jpg" 
                  alt="Buddhist Tradition" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  Buddhist Tradition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text">
                  Teachings focused on understanding the nature of mind, cultivating compassion, and realizing the true nature of reality through meditation and ethical conduct.
                </p>
              </CardContent>
            </Card>
            
            {/* Tradition 2 */}
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/tradition-taoist.jpg" 
                  alt="Taoist Tradition" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  Taoist Tradition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text">
                  Wisdom centered on living in harmony with the Tao (the Way), embracing naturalness, simplicity, and non-action (wu-wei) as a path to balance and flow.
                </p>
              </CardContent>
            </Card>
            
            {/* Tradition 3 */}
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/tradition-hindu.jpg" 
                  alt="Hindu Tradition" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  Hindu Tradition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text">
                  Ancient teachings from the Vedas and Upanishads exploring the nature of consciousness, the self (Atman), and its relationship to the ultimate reality (Brahman).
                </p>
              </CardContent>
            </Card>
            
            {/* Tradition 4 */}
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/tradition-sufi.jpg" 
                  alt="Sufi Tradition" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  Sufi Tradition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="sacred-text">
                  Mystical Islamic teachings that emphasize direct experience of the Divine through love, devotion, and the purification of the heart.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Study Resources */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-2xl text-primary-800 dark:text-primary-200 text-center">
                How to Study Sacred Texts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-lg mb-4 text-primary-700 dark:text-primary-300">
                    Approaches to Study
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">1.</span>
                      <div>
                        <p className="font-medium">Contemplative Reading</p>
                        <p className="text-sm text-muted-foreground">
                          Read slowly and mindfully, pausing to reflect on each passage. Allow the words to sink in deeply rather than rushing to finish.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">2.</span>
                      <div>
                        <p className="font-medium">Analytical Study</p>
                        <p className="text-sm text-muted-foreground">
                          Examine the text intellectually, considering its historical context, key concepts, and logical structure.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">3.</span>
                      <div>
                        <p className="font-medium">Meditative Integration</p>
                        <p className="text-sm text-muted-foreground">
                          After reading, sit in meditation and allow the teachings to integrate with your own experience.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">4.</span>
                      <div>
                        <p className="font-medium">Discussion and Dialogue</p>
                        <p className="text-sm text-muted-foreground">
                          Share insights and questions with others to deepen understanding through different perspectives.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-4 text-primary-700 dark:text-primary-300">
                    Study Resources
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Monthly Study Groups</p>
                        <p className="text-sm text-muted-foreground">
                          Join our facilitated discussions on selected texts, both in-person and online.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Teacher Commentaries</p>
                        <p className="text-sm text-muted-foreground">
                          Access recorded teachings from our resident teachers explaining key texts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Physical Library</p>
                        <p className="text-sm text-muted-foreground">
                          Visit our on-site library with over 5,000 volumes of spiritual texts and commentaries.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Study Retreats</p>
                        <p className="text-sm text-muted-foreground">
                          Immerse yourself in focused study of specific texts during our specialized retreats.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default WisdomLibraryPage;