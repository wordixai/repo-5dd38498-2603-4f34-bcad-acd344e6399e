export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventDate?: string;
  eventType: string;
  status: 'inquiry' | 'booked' | 'completed' | 'cancelled';
  packageId?: string;
  referredBy?: string;
  notes: string;
  createdAt: string;
  totalPaid: number;
  balance: number;
}

export interface Gallery {
  id: string;
  clientId: string;
  name: string;
  eventType: string;
  eventDate: string;
  photos: Photo[];
  isPublic: boolean;
  password?: string;
  downloadEnabled: boolean;
  expiresAt?: string;
  createdAt: string;
}

export interface Photo {
  id: string;
  url: string;
  thumbnailUrl: string;
  filename: string;
  size: number;
  isSelected: boolean;
  metadata: {
    width: number;
    height: number;
    camera?: string;
    lens?: string;
    settings?: string;
  };
}

export interface Booking {
  id: string;
  clientId: string;
  packageId: string;
  eventDate: string;
  eventTime: string;
  location: string;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes: string;
  reminders: Reminder[];
  createdAt: string;
}

export interface Reminder {
  id: string;
  type: 'email' | 'sms';
  scheduledFor: string;
  sent: boolean;
  message: string;
}

export interface Package {
  id: string;
  name: string;
  type: 'wedding' | 'portrait' | 'event' | 'commercial';
  description: string;
  price: number;
  duration: number;
  deliverables: string[];
  includes: string[];
  isActive: boolean;
  createdAt: string;
}

export interface Referral {
  id: string;
  referrerClientId: string;
  referredClientId: string;
  status: 'pending' | 'booked' | 'rewarded';
  reward: number;
  notes: string;
  createdAt: string;
}

export interface FileDelivery {
  id: string;
  clientId: string;
  galleryId: string;
  files: DeliveryFile[];
  method: 'download' | 'usb' | 'cloud';
  status: 'preparing' | 'ready' | 'delivered';
  expiresAt?: string;
  createdAt: string;
}

export interface DeliveryFile {
  id: string;
  name: string;
  size: number;
  type: 'high-res' | 'web-res' | 'print-ready';
  url: string;
}