import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ProfileState {
  user: {
    name: string;
    address: {
      city: string;
      location: {
        lat: number;
        lng: number;
      };
    };
  };
  updateCity: (city: string) => void;
  updateLocation: (lat: number, lng: number) => void;
}

export const useProfileStore = create<ProfileState>()(
    // set trực tiếp vào state không cần phải dùng spread operator
  immer((set) => ({
    user: {
      name: 'Cường',
      address: {
        city: 'Hà Nội',
        location: {
          lat: 21.03,
          lng: 105.85,
        },
      },
    },
    updateCity: (city) =>
      set((state) => {
        state.user.address.city = city; 
      }),
    updateLocation: (lat, lng) =>
      set((state) => {
        state.user.address.location.lat = lat;  
        state.user.address.location.lng = lng;
      }),
  }))
);