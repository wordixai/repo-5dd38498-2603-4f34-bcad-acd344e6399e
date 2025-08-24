import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface Activity {
  id: string;
  type: 'booking' | 'gallery' | 'payment' | 'delivery';
  description: string;
  client: string;
  timestamp: string;
  status?: string;
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'booking',
    description: 'New wedding booking confirmed',
    client: 'Sarah & John Thompson',
    timestamp: '2024-02-15T10:30:00Z',
    status: 'confirmed'
  },
  {
    id: '2',
    type: 'gallery',
    description: 'Gallery uploaded and shared',
    client: 'Emily Rodriguez',
    timestamp: '2024-02-14T15:45:00Z',
    status: 'shared'
  },
  {
    id: '3',
    type: 'payment',
    description: 'Payment received - $1,500',
    client: 'Tech Startup Inc.',
    timestamp: '2024-02-13T09:15:00Z',
    status: 'completed'
  },
  {
    id: '4',
    type: 'delivery',
    description: 'Files delivered via download link',
    client: 'Sarah & John Thompson',
    timestamp: '2024-02-12T14:20:00Z',
    status: 'delivered'
  }
];

const getActivityColor = (type: string) => {
  switch (type) {
    case 'booking': return 'bg-blue-500';
    case 'gallery': return 'bg-green-500';
    case 'payment': return 'bg-yellow-500';
    case 'delivery': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'confirmed':
    case 'completed':
    case 'delivered':
    case 'shared':
      return 'default';
    default:
      return 'secondary';
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest updates from your photography business
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className={`text-white text-xs ${getActivityColor(activity.type)}`}>
                  {activity.type.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.description}
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-muted-foreground">
                    {activity.client}
                  </p>
                  {activity.status && (
                    <Badge variant={getStatusVariant(activity.status)} className="text-xs">
                      {activity.status}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}