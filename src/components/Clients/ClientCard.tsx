import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Mail, MoreHorizontal, Phone, DollarSign } from 'lucide-react';
import { Client } from '@/types';
import { format } from 'date-fns';

interface ClientCardProps {
  client: Client;
  onEdit: (client: Client) => void;
  onDelete: (id: string) => void;
  onViewGalleries: (client: Client) => void;
}

const getStatusColor = (status: Client['status']) => {
  switch (status) {
    case 'inquiry': return 'secondary';
    case 'booked': return 'default';
    case 'completed': return 'outline';
    case 'cancelled': return 'destructive';
    default: return 'secondary';
  }
};

export function ClientCard({ client, onEdit, onDelete, onViewGalleries }: ClientCardProps) {
  const initials = client.name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{client.name}</h3>
            <p className="text-sm text-muted-foreground">{client.eventType}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={getStatusColor(client.status)}>
            {client.status}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(client)}>
                Edit Client
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onViewGalleries(client)}>
                View Galleries
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onDelete(client.id)}
                className="text-destructive"
              >
                Delete Client
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{client.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{client.phone}</span>
          </div>
          {client.eventDate && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{format(new Date(client.eventDate), 'MMM dd, yyyy')}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span>${client.totalPaid.toLocaleString()}</span>
          </div>
        </div>
        
        {client.balance > 0 && (
          <div className="bg-yellow-50 text-yellow-800 p-2 rounded text-sm">
            Balance due: ${client.balance.toLocaleString()}
          </div>
        )}
        
        {client.notes && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {client.notes}
          </p>
        )}
      </CardContent>
    </Card>
  );
}