import { useState } from 'react';
import { DashboardLayout } from '@/components/Layout/DashboardLayout';
import { ClientCard } from '@/components/Clients/ClientCard';
import { AddClientDialog } from '@/components/Clients/AddClientDialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useStore } from '@/store/useStore';
import { Client } from '@/types';
import { Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ClientsPage() {
  const { clients, addClient, updateClient, deleteClient } = useStore();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.eventType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEditClient = (client: Client) => {
    // TODO: Implement edit functionality
    toast({
      title: "Edit Client",
      description: "Edit functionality will be implemented soon.",
    });
  };

  const handleDeleteClient = (id: string) => {
    deleteClient(id);
    toast({
      title: "Client Deleted",
      description: "Client has been successfully removed.",
    });
  };

  const handleViewGalleries = (client: Client) => {
    // TODO: Navigate to galleries page
    toast({
      title: "View Galleries",
      description: `Opening galleries for ${client.name}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Clients</h2>
            <p className="text-muted-foreground">
              Manage your photography clients and their projects
            </p>
          </div>
          <AddClientDialog onAddClient={addClient} />
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="inquiry">Inquiry</SelectItem>
              <SelectItem value="booked">Booked</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {clients.filter(c => c.status === 'inquiry').length}
            </div>
            <div className="text-sm text-blue-700">Inquiries</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {clients.filter(c => c.status === 'booked').length}
            </div>
            <div className="text-sm text-green-700">Booked</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {clients.filter(c => c.status === 'completed').length}
            </div>
            <div className="text-sm text-purple-700">Completed</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              ${clients.reduce((sum, c) => sum + c.totalPaid, 0).toLocaleString()}
            </div>
            <div className="text-sm text-yellow-700">Total Revenue</div>
          </div>
        </div>

        {/* Clients Grid */}
        {filteredClients.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              {searchTerm || statusFilter !== 'all' 
                ? 'No clients match your search criteria.'
                : 'No clients yet. Add your first client to get started!'
              }
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredClients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                onEdit={handleEditClient}
                onDelete={handleDeleteClient}
                onViewGalleries={handleViewGalleries}
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}