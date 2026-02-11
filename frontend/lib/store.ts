import { create } from 'zustand';

interface AppStore {
  activeTab: string;
  searchQuery: string;
  companies: any[];
  mobileMenuOpen: boolean;
  setActiveTab: (tab: string) => void;
  setSearchQuery: (query: string) => void;
  setCompanies: (companies: any[]) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  activeTab: 'browse',
  searchQuery: '',
  companies: [],
  mobileMenuOpen: false,
  setActiveTab: (tab: string) => set({ activeTab: tab }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setCompanies: (companies: any[]) => set({ companies }),
  setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),
}));
