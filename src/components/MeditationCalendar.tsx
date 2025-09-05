import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { meditationSchedule } from "@/data/meditationData";

export const MeditationCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Get meditation sessions for the selected date
  const getSessionsForDate = (date: Date | undefined) => {
    if (!date) return [];
    
    const dateString = date.toISOString().split('T')[0];
    return meditationSchedule.filter(session => {
      const sessionDate = new Date(session.date).toISOString().split('T')[0];
      return sessionDate === dateString;
    });
  };
  
  const selectedDateSessions = getSessionsForDate(date);
  
  // Function to determine if a date has sessions
  const hasSessionsOnDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return meditationSchedule.some(session => {
      const sessionDate = new Date(session.date).toISOString().split('T')[0];
      return sessionDate === dateString;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="calendar-meditation">
        <CardHeader>
          <CardTitle className="font-display text-primary-800 dark:text-primary-200">
            Meditation Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            modifiers={{
              hasSessions: (date) => hasSessionsOnDate(date),
            }}
            modifiersStyles={{
              hasSessions: {
                fontWeight: "bold",
                backgroundColor: "hsl(var(--accent-50))",
                borderColor: "hsl(var(--accent))",
              },
            }}
          />
        </CardContent>
      </Card>
      
      <Card className="calendar-meditation">
        <CardHeader>
          <CardTitle className="font-display text-primary-800 dark:text-primary-200">
            {date ? (
              <>Sessions for {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</>
            ) : (
              <>Select a date</>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDateSessions.length > 0 ? (
            <div className="space-y-4">
              {selectedDateSessions.map((session, index) => (
                <div key={index} className="p-4 border border-border rounded-md bg-surface">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-lg text-primary-800 dark:text-primary-200">
                      {session.title}
                    </h3>
                    <Badge variant="outline" className="bg-accent text-accent-foreground">
                      {session.time}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{session.description}</p>
                  <div className="mt-3 flex items-center">
                    <span className="text-xs text-muted-foreground">Led by: {session.teacher}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">No meditation sessions scheduled for this date.</p>
              <p className="mt-2 text-sm text-muted-foreground">Please select a different date or check back later.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};