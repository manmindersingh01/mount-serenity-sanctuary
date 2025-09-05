import { useEffect } from "react";
import { SilentRetreatCard } from "@/components/SilentRetreatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { silentRetreats } from "@/data/retreatData";
import { IncenseSmoke } from "@/components/IncenseSmoke";

const SilentRetreatPage = () => {
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
            Silent Retreats
          </h1>
          <p className="sacred-text max-w-2xl mx-auto">
            Experience the profound transformation that comes from extended periods of silence and contemplation.
          </p>
        </div>
        
        {/* Retreat Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {silentRetreats.map((retreat) => (
              <SilentRetreatCard
                key={retreat.id}
                title={retreat.title}
                description={retreat.description}
                duration={retreat.duration}
                dates={retreat.dates}
                price={retreat.price}
                availability={retreat.availability}
                image={retreat.image}
              />
            ))}
          </div>
        </section>
        
        {/* What to Expect */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-primary-800 dark:text-primary-200 mb-6 text-center">
            What to Expect
          </h2>
          
          <Tabs defaultValue="schedule" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="schedule">Daily Schedule</TabsTrigger>
              <TabsTrigger value="accommodations">Accommodations</TabsTrigger>
              <TabsTrigger value="meals">Meals</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            </TabsList>
            
            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Daily Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        Our retreat schedule is designed to support deep practice while maintaining balance and well-being. Each day includes periods of sitting meditation, walking meditation, mindful movement, and rest.
                      </p>
                      <div className="space-y-2 mt-6">
                        <div className="flex justify-between">
                          <span className="font-medium">5:30 AM</span>
                          <span>Wake-up Bell</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">6:00 - 7:30 AM</span>
                          <span>Morning Meditation</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">7:30 - 8:30 AM</span>
                          <span>Breakfast</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">9:00 - 11:30 AM</span>
                          <span>Meditation & Dharma Talk</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">12:00 - 1:00 PM</span>
                          <span>Lunch</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">1:00 - 3:00 PM</span>
                          <span>Rest & Walking Meditation</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">3:00 - 5:00 PM</span>
                          <span>Afternoon Meditation</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">5:30 - 6:30 PM</span>
                          <span>Light Dinner</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">7:00 - 8:30 PM</span>
                          <span>Evening Practice</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">9:00 PM</span>
                          <span>Silence & Rest</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/retreat-schedule.jpg" 
                        alt="Daily Schedule" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="accommodations">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Accommodations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        Our accommodations are simple, clean, and comfortable, designed to support your practice without unnecessary distractions. We offer several options to suit different preferences and budgets.
                      </p>
                      <ul className="space-y-4 mt-6">
                        <li>
                          <h3 className="font-medium">Private Rooms</h3>
                          <p className="text-sm text-muted-foreground">Single rooms with a twin bed, desk, and private or shared bathroom.</p>
                        </li>
                        <li>
                          <h3 className="font-medium">Shared Rooms</h3>
                          <p className="text-sm text-muted-foreground">Double or triple occupancy rooms with shared bathrooms.</p>
                        </li>
                        <li>
                          <h3 className="font-medium">Dormitory</h3>
                          <p className="text-sm text-muted-foreground">Simple, affordable dormitory-style accommodations with shared bathrooms.</p>
                        </li>
                        <li>
                          <h3 className="font-medium">Private Cabins</h3>
                          <p className="text-sm text-muted-foreground">For longer retreats, private cabins with ensuite bathrooms are available.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/retreat-accommodation.jpg" 
                        alt="Accommodations" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="meals">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Meals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        All meals at Mount Serenity are vegetarian, with vegan and gluten-free options available. Our kitchen uses fresh, organic ingredients, many grown in our own gardens.
                      </p>
                      <p className="sacred-text mb-4">
                        Meals are eaten in silence to support mindful eating and continuous awareness throughout the day. Simple, nourishing food is prepared with care to support your meditation practice.
                      </p>
                      <p className="sacred-text">
                        Special dietary requirements can be accommodated with advance notice.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/retreat-meals.jpg" 
                        alt="Retreat Meals" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="guidelines">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                    Retreat Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="sacred-text mb-4">
                        To create a container that supports deep practice, we ask all participants to observe the following guidelines during their stay:
                      </p>
                      <ul className="space-y-2 mt-4">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Maintain noble silence throughout the retreat</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Refrain from reading, writing, and digital devices</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Participate in all scheduled activities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Observe the five precepts: no killing, stealing, sexual activity, false speech, or intoxicants</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Dress modestly and comfortably in solid, muted colors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Respect the sanctuary grounds and all beings</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/images/retreat-guidelines.jpg" 
                        alt="Retreat Guidelines" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Testimonials */}
        <section>
          <h2 className="font-display text-2xl text-primary-800 dark:text-primary-200 mb-6 text-center">
            Retreat Experiences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-surface">
              <CardContent className="pt-6">
                <p className="sacred-text italic mb-6">
                  "The silence was challenging at first, but by the third day, I experienced a clarity and peace I've never known before. The teachers provided just the right amount of guidance while allowing space for my own journey."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-primary">EM</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Elena M.</p>
                    <p className="text-xs text-muted-foreground">Week of Contemplation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="bg-surface">
              <CardContent className="pt-6">
                <p className="sacred-text italic mb-6">
                  "I came to the Weekend of Silence exhausted and burnt out. I left with renewed energy and perspective. The simple schedule, nourishing food, and supportive environment were exactly what I needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-primary">DL</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">David L.</p>
                    <p className="text-xs text-muted-foreground">Weekend of Silence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="bg-surface">
              <CardContent className="pt-6">
                <p className="sacred-text italic mb-6">
                  "The Month of Transformation was truly life-changing. The extended time in silence allowed me to work through layers of conditioning and discover a profound sense of who I really am beyond my usual identity."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-primary">AJ</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Amara J.</p>
                    <p className="text-xs text-muted-foreground">Month of Transformation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SilentRetreatPage;