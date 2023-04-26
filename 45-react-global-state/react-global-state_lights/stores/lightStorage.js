import { create } from "zustand";

export const useLightStore = create((set, get) => ({
  lights: [
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ],

  toggleLight: (id) =>
    set((state) => ({
      lights: state.lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      ),
    })),

  numberOfLights: () =>
    get().lights.filter((light) => light.isOn === true).length,

  setAllLights: (status) =>
    set((state) => ({
      lights: state.lights.map((light) => ({ ...light, isOn: status })),
    })),

  isItDimmed: () => get().numberOfLights() === 0,
}));
