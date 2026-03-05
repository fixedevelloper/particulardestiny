import { create } from "zustand";
import { persist } from "zustand/middleware";
import {CartItem} from "../types/types";
import { calculateNights } from "../utils/";
type CartState = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
    total: () => number;
    totalNights: (item: CartItem) => number;
    totalItem: (item: CartItem) => number;
    count: () => number;
};

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) => {
                set({
                    items: [...get().items, item],
                });
            },

            removeItem: (id) => {
                set({
                    items: get().items.filter((i) => i.id !== id),
                });
            },

            clearCart: () => set({ items: [] }),

            count: () =>
                get().items.reduce((sum, item) => sum + item.quantity, 0),

            totalNights: (item) =>
                calculateNights(item.arrivalDate, item.departureDate),

            totalItem: (item) => {
                const nights = calculateNights(
                    item.arrivalDate,
                    item.departureDate
                );

                const featureTotal = item.features.reduce(
                    (sum, f) => sum + f.price,
                    0
                );

                return (
                    (item.pricePerNight + featureTotal) *
                    nights *
                    item.quantity
                );
            },

            total: () =>
                get().items.reduce((sum, item) => {
                    const nights = calculateNights(
                        item.arrivalDate,
                        item.departureDate
                    );

                    const featureTotal = item.features.reduce(
                        (s, f) => s + f.price,
                        0
                    );

                    return (
                        sum +
                        (item.pricePerNight + featureTotal) *
                        nights *
                        item.quantity
                    );
                }, 0),
        }),
        {
            name: "booking-cart",
        }
    )
);