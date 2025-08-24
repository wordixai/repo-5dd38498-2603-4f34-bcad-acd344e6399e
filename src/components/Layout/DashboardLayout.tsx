import { Camera, Users, Calendar, Package, Share2, Download, BarChart3, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const navigation = [
  {
    title: 'Overview',
    items: [
      { title: 'Dashboard', icon: BarChart3, href: '/' },
    ]
  },
  {
    title: 'Client Management',
    items: [
      { title: 'Clients', icon: Users, href: '/clients' },
      { title: 'Bookings', icon: Calendar, href: '/bookings' },
    ]
  },
  {
    title: 'Gallery & Delivery',
    items: [
      { title: 'Galleries', icon: Camera, href: '/galleries' },
      { title: 'File Delivery', icon: Download, href: '/delivery' },
    ]
  },
  {
    title: 'Business',
    items: [
      { title: 'Packages', icon: Package, href: '/packages' },
      { title: 'Referrals', icon: Share2, href: '/referrals' },
    ]
  },
  {
    title: 'System',
    items: [
      { title: 'Settings', icon: Settings, href: '/settings' },
    ]
  }
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-3 px-2 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Camera className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">PhotoCRM</span>
              <span className="text-xs text-muted-foreground">Professional</span>
            </div>
          </div>
        </SidebarHeader>
        
        <SidebarContent>
          {navigation.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.href} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        
        <SidebarFooter>
          <div className="p-4 text-xs text-muted-foreground">
            © 2024 PhotoCRM Pro
          </div>
        </SidebarFooter>
      </Sidebar>
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="mx-2 h-4 w-px bg-sidebar-border" />
          <h1 className="text-lg font-semibold">Photography CRM</h1>
        </header>
        
        <main className="flex-1 space-y-4 p-4 pt-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}