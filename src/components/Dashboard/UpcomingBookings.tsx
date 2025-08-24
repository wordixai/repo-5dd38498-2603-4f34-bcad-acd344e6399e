import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { format } from 'date-fns';

interface UpcomingBooking {
  id: string;
  clientName: string;
  eventType: string;
  date: string;
  time: string;
  location: string;
  phone: string;
  package: string;
  status: 'confirmed' | 'pending';
}

const mockBookings: UpcomingBooking[] = [
  {
    id: '1',
    clientName: 'Sarah & John Thompson',
    eventType: 'Wedding',
    date: '2024-06-15',
    time: '16:00',
    location: 'Sunset Beach Resort',
    phone: '+1 (555) 123-4567',
    package: 'Ultimate Wedding Package',
    status: 'confirmed'
  },
  {
    id: '2',
    clientName: 'Emily Rodriguez',
    eventType: 'Family Portrait',
    date: '2024-03-10',
    time: '10:00',
    location: 'Central Park',
    phone: '+1 (555) 987-6543',
    package: 'Portrait Essentials',
    status: 'pending'
  }
];

export function UpcomingBookings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Bookings</CardTitle>
        <CardDescription>
          Your scheduled sessions and events
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockBookings.map((booking) => (
            <div key={booking.id} className="rounded-lg border p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">{booking.clientName}</h4>
                  <p className="text-sm text-muted-foreground">{booking.eventType}</p>
                </div>
                <Badge 
                  variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                >
                  {booking.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {format(new Date(booking.date), 'MMM dd, yyyy')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  {booking.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {booking.location}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {booking.phone}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-sm font-medium">{booking.package}</span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}