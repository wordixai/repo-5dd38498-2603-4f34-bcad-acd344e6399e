import { create } from 'zustand';
import { Client, Gallery, Booking, Package, Referral, FileDelivery } from '@/types';

interface Store {
  // Clients
  clients: Client[];
  addClient: (client: Client) => void;
  updateClient: (id: string, updates: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  
  // Galleries
  galleries: Gallery[];
  addGallery: (gallery: Gallery) => void;
  updateGallery: (id: string, updates: Partial<Gallery>) => void;
  deleteGallery: (id: string) => void;
  
  // Bookings
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;
  
  // Packages
  packages: Package[];
  addPackage: (pkg: Package) => void;
  updatePackage: (id: string, updates: Partial<Package>) => void;
  deletePackage: (id: string) => void;
  
  // Referrals
  referrals: Referral[];
  addReferral: (referral: Referral) => void;
  updateReferral: (id: string, updates: Partial<Referral>) => void;
  
  // File Deliveries
  fileDeliveries: FileDelivery[];
  addFileDelivery: (delivery: FileDelivery) => void;
  updateFileDelivery: (id: string, updates: Partial<FileDelivery>) => void;
}

// Mock data
const mockClients: Client[] = [
  {
    id: '1',
    name: 'Sarah & John Thompson',
    email: 'sarah.thompson@email.com',
    phone: '+1 (555) 123-4567',
    eventDate: '2024-06-15',
    eventType: 'Wedding',
    status: 'booked',
    packageId: '1',
    notes: 'Beach wedding ceremony at sunset',
    createdAt: '2024-01-15',
    totalPaid: 2500,
    balance: 1500
  },
  {
    id: '2',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    phone: '+1 (555) 987-6543',
    eventType: 'Portrait Session',
    status: 'inquiry',
    notes: 'Family portrait session for 5 people',
    createdAt: '2024-02-10',
    totalPaid: 0,
    balance: 800
  },
  {
    id: '3',
    name: 'Tech Startup Inc.',
    email: 'events@techstartup.com',
    phone: '+1 (555) 456-7890',
    eventDate: '2024-04-20',
    eventType: 'Corporate Event',
    status: 'completed',
    packageId: '3',
    referredBy: '1',
    notes: 'Annual company celebration',
    createdAt: '2024-01-05',
    totalPaid: 1200,
    balance: 0
  }
];

const mockPackages: Package[] = [
  {
    id: '1',
    name: 'Ultimate Wedding Package',
    type: 'wedding',
    description: 'Complete wedding day coverage with premium deliverables',
    price: 4000,
    duration: 8,
    deliverables: ['500+ edited photos', 'Online gallery', 'USB drive', 'Print release'],
    includes: ['Engagement session', 'Wedding day coverage', 'Reception coverage'],
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    name: 'Portrait Essentials',
    type: 'portrait',
    description: 'Professional portrait session with high-quality edits',
    price: 800,
    duration: 2,
    deliverables: ['50+ edited photos', 'Online gallery', 'Print release'],
    includes: ['1-hour session', 'Outfit changes', 'Basic retouching'],
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    id: '3',
    name: 'Corporate Event Coverage',
    type: 'event',
    description: 'Professional event documentation and networking photos',
    price: 1200,
    duration: 4,
    deliverables: ['200+ edited photos', 'Same-day highlights', 'Online gallery'],
    includes: ['Event coverage', 'Networking photos', 'Branding setup'],
    isActive: true,
    createdAt: '2024-01-01'
  }
];

export const useStore = create<Store>((set) => ({
  // Clients
  clients: mockClients,
  addClient: (client) => set((state) => ({ clients: [...state.clients, client] })),
  updateClient: (id, updates) => set((state) => ({
    clients: state.clients.map(client => 
      client.id === id ? { ...client, ...updates } : client
    )
  })),
  deleteClient: (id) => set((state) => ({
    clients: state.clients.filter(client => client.id !== id)
  })),
  
  // Galleries
  galleries: [],
  addGallery: (gallery) => set((state) => ({ galleries: [...state.galleries, gallery] })),
  updateGallery: (id, updates) => set((state) => ({
    galleries: state.galleries.map(gallery => 
      gallery.id === id ? { ...gallery, ...updates } : gallery
    )
  })),
  deleteGallery: (id) => set((state) => ({
    galleries: state.galleries.filter(gallery => gallery.id !== id)
  })),
  
  // Bookings
  bookings: [],
  addBooking: (booking) => set((state) => ({ bookings: [...state.bookings, booking] })),
  updateBooking: (id, updates) => set((state) => ({
    bookings: state.bookings.map(booking => 
      booking.id === id ? { ...booking, ...updates } : booking
    )
  })),
  deleteBooking: (id) => set((state) => ({
    bookings: state.bookings.filter(booking => booking.id !== id)
  })),
  
  // Packages
  packages: mockPackages,
  addPackage: (pkg) => set((state) => ({ packages: [...state.packages, pkg] })),
  updatePackage: (id, updates) => set((state) => ({
    packages: state.packages.map(pkg => 
      pkg.id === id ? { ...pkg, ...updates } : pkg
    )
  })),
  deletePackage: (id) => set((state) => ({
    packages: state.packages.filter(pkg => pkg.id !== id)
  })),
  
  // Referrals
  referrals: [],
  addReferral: (referral) => set((state) => ({ referrals: [...state.referrals, referral] })),
  updateReferral: (id, updates) => set((state) => ({
    referrals: state.referrals.map(referral => 
      referral.id === id ? { ...referral, ...updates } : referral
    )
  })),
  
  // File Deliveries
  fileDeliveries: [],
  addFileDelivery: (delivery) => set((state) => ({ fileDeliveries: [...state.fileDeliveries, delivery] })),
  updateFileDelivery: (id, updates) => set((state) => ({
    fileDeliveries: state.fileDeliveries.map(delivery => 
      delivery.id === id ? { ...delivery, ...updates } : delivery
    )
  })),
}));