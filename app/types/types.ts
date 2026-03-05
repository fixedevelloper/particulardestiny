export interface RoomType {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}
export interface Category {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}
export interface Feature {
    id: number;
    name: string;
    price:number;
    icon?: Image;
    created_at: string;
    updated_at: string;
}

export interface Room {
    id: number;
    title: string;
    slug: string;
    description?: string | null;
    price: number;
    capacity: number;
    size?: number | null;
    image?: Image;

    category_id: number;
    room_type_id: number;

    category?: Category;
    room_type?: RoomType;
    features?: Feature[];
    images?: RoomImage[];

    created_at: string;
    updated_at: string;
}
export interface RoomImage {
    id: number;
    room_id: number;
    image: Image;
    created_at: string;
    updated_at: string;
}
export type ReservationStatus =
    | "pending"
    | "confirmed"
    | "checked_in"
    | "checked_out"
    | "cancelled";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface Reservation {
    id: number;
    user_id: number;
    room_id: number;

    check_in: string;
    check_out: string;

    adults: number;
    children: number;
    total_guests: number;

    price_per_night: number;
    nights: number;
    subtotal: number;
    tax: number;
    discount: number;
    total_price: number;

    status: ReservationStatus;
    payment_status: PaymentStatus;
    meta?: Record<string, any> | null;

    confirmed_at?: string | null;
    cancelled_at?: string | null;

    created_at: string;
    updated_at: string;
}
export type PaymentState = "pending" | "paid" | "failed";

export interface Payment {
    id: number;
    reservation_id: number;
    amount: number;
    method: string; // mobile_money, card, etc.
    transaction_id?: string | null;
    status: PaymentState;

    created_at: string;
    updated_at: string;
}
export interface RoomAvailability {
    id: number;
    room_id: number;
    date: string;
    is_available: boolean;
}
export type Image = {
    id: number
    name?: string
    src: string
    alt?: string
    thumb?:string
    medium?:string
    icon?:string
}
export type CartItem = {
    id: number;
    roomId: number;
    name: string;
    slug?: string;

    pricePerNight: number;

    arrivalDate: string;
    departureDate: string;

    adults: number;
    children: number;

    quantity: number; // nombre de chambres

    image?: Image;

    features: Feature[];
};