import { DashboardLayout } from '@/components/Layout/DashboardLayout';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { RecentActivity } from '@/components/Dashboard/RecentActivity';
import { UpcomingBookings } from '@/components/Dashboard/UpcomingBookings';
import { useStore } from '@/store/useStore';
import { 
  Users, 
  Calendar, 
  Camera, 
  DollarSign, 
  TrendingUp,
  Package,
  Share2
} from 'lucide-react';

const Index = () => {
  const { clients, packages, bookings } = useStore();
  
  // Calculate stats
  const totalClients = clients.length;
  const activeBookings = bookings.filter(b => b.status === 'confirmed').length;
  const totalRevenue = clients.reduce((sum, client) => sum + client.totalPaid, 0);
  const pendingInquiries = clients.filter(c => c.status === 'inquiry').length;
  const completedProjects = clients.filter(c => c.status === 'completed').length;
  const activePackages = packages.filter(p => p.isActive).length;
  const totalReferrals = clients.filter(c => c.referredBy).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your photography business.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Clients"
            value={totalClients}
            description={`${pendingInquiries} pending inquiries`}
            icon={Users}
            trend={{ value: 12, isPositive: true }}
            variant="success"
          />
          <StatsCard
            title="Active Bookings"
            value={activeBookings}
            description="Confirmed sessions"
            icon={Calendar}
            variant="info"
          />
          <StatsCard
            title="Total Revenue"
            value={`$${totalRevenue.toLocaleString()}`}
            description="This year"
            icon={DollarSign}
            trend={{ value: 8, isPositive: true }}
            variant="success"
          />
          <StatsCard
            title="Completed Projects"
            value={completedProjects}
            description="Successfully delivered"
            icon={Camera}
            variant="default"
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            title="Active Packages"
            value={activePackages}
            description="Available for booking"
            icon={Package}
            variant="info"
          />
          <StatsCard
            title="Referrals"
            value={totalReferrals}
            description="From existing clients"
            icon={Share2}
            variant="warning"
          />
          <StatsCard
            title="Growth Rate"
            value="23%"
            description="Month over month"
            icon={TrendingUp}
            trend={{ value: 5, isPositive: true }}
            variant="success"
          />
        </div>

        {/* Dashboard Content */}
        <div className="grid gap-6 lg:grid-cols-2">
          <UpcomingBookings />
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;