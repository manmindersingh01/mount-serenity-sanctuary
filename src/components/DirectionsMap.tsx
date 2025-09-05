import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin, Car, TrainFront as Train, Bus } from "lucide-react";

export const DirectionsMap = () => {
  const [transportMode, setTransportMode] = useState("car");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-primary-800 dark:text-primary-200 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-accent" />
          Find Your Way to Mount Serenity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Tabs defaultValue="car" onValueChange={setTransportMode}>
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="car" className="flex items-center">
                <Car className="h-4 w-4 mr-2" />
                <span>By Car</span>
              </TabsTrigger>
              <TabsTrigger value="train" className="flex items-center">
                <Train className="h-4 w-4 mr-2" />
                <span>By Train</span>
              </TabsTrigger>
              <TabsTrigger value="bus" className="flex items-center">
                <Bus className="h-4 w-4 mr-2" />
                <span>By Bus</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="car" className="space-y-4">
              <p className="sacred-text">
                From the city center, take Highway 12 North for approximately 25 miles. 
                Turn right onto Mountain View Road and continue for 5 miles. 
                The sanctuary entrance will be on your left, marked by prayer flags.
              </p>
              <p className="text-sm text-muted-foreground">
                Free parking is available on-site.
              </p>
            </TabsContent>
            
            <TabsContent value="train" className="space-y-4">
              <p className="sacred-text">
                Take the Mountain Line train to Serenity Valley Station. 
                From there, our shuttle service runs every hour from 8am to 6pm.
                The journey takes approximately 15 minutes.
              </p>
              <p className="text-sm text-muted-foreground">
                Please call ahead to confirm shuttle availability.
              </p>
            </TabsContent>
            
            <TabsContent value="bus" className="space-y-4">
              <p className="sacred-text">
                The #42 Mountain Express bus stops directly at our entrance.
                Buses run every 30 minutes from the Central Bus Terminal between 7am and 8pm daily.
              </p>
              <p className="text-sm text-muted-foreground">
                The journey takes approximately 45 minutes from the city center.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Map container */}
        <div className="aspect-video rounded-md overflow-hidden border border-border">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <img
              src="/images/sanctuary-map.jpg"
              alt="Map to Mount Serenity Sanctuary"
              className="w-full h-full object-cover" />

          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button className="btn-accent">
            Get Directions in Google Maps
          </Button>
        </div>
      </CardContent>
    </Card>);

};