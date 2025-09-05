import { useEffect } from "react";
import { ContactForm } from "@/components/ContactForm";
import { DirectionsMap } from "@/components/DirectionsMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { IncenseSmoke } from "@/components/IncenseSmoke";

const ContactPage = () => {
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
            Contact & Directions
          </h1>
          <p className="sacred-text max-w-2xl mx-auto">
            Reach out to us with questions or plan your visit to Mount Serenity Sanctuary.
          </p>
        </div>
        
        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-primary-800 dark:text-primary-200">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">info@mountserenity.org</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We respond to emails within 48 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available Monday-Friday, 9am-5pm
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-muted-foreground">
                          123 Mountain View Road<br />
                          Serenity Valley, CA 95123<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Visiting Hours</h3>
                        <p className="text-muted-foreground">
                          Daily: 8:00 AM - 6:00 PM<br />
                          Meditation Hall: 5:30 AM - 9:00 PM
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Closed during silent retreats (see calendar)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-primary-800 dark:text-primary-200">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Directions Map */}
        <section className="mb-16">
          <DirectionsMap />
        </section>
        
        {/* FAQ */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-2xl text-primary-800 dark:text-primary-200 text-center">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h3 className="font-display text-lg mb-2 text-primary-700 dark:text-primary-300">
                    Do I need to make a reservation to visit?
                  </h3>
                  <p className="sacred-text">
                    Day visitors are welcome without reservations during regular visiting hours. However, if you wish to attend a specific program, meditation class, or stay overnight, advance registration is required.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-2 text-primary-700 dark:text-primary-300">
                    What should I bring for a retreat?
                  </h3>
                  <p className="sacred-text">
                    Comfortable, modest clothing in solid, muted colors; personal toiletries; any necessary medications; a water bottle; and a journal. Meditation cushions, blankets, and yoga mats are provided, but you're welcome to bring your own.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-2 text-primary-700 dark:text-primary-300">
                    Is Mount Serenity affiliated with a specific religion?
                  </h3>
                  <p className="sacred-text">
                    While our practices are rooted in Buddhist traditions, we welcome people of all faiths and backgrounds. Our approach emphasizes universal principles of mindfulness, compassion, and wisdom that can complement any spiritual path.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-2 text-primary-700 dark:text-primary-300">
                    Are meals included with retreats?
                  </h3>
                  <p className="sacred-text">
                    Yes, all retreats include three vegetarian meals per day. We can accommodate most dietary restrictions with advance notice. Day visitors can purchase meals in our dining hall when available.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-2 text-primary-700 dark:text-primary-300">
                    Is there cell phone reception or Wi-Fi?
                  </h3>
                  <p className="sacred-text">
                    Cell reception is limited due to our mountain location. We provide Wi-Fi in designated areas for emergency use, but encourage visitors to disconnect from digital devices during their stay to support their practice.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-2 text-primary-700 dark:text-primary-300">
                    Do you offer financial assistance?
                  </h3>
                  <p className="sacred-text">
                    Yes, we have a scholarship fund to make our programs accessible to all. Please contact us to learn more about work-study opportunities and sliding scale options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;