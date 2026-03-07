"use client";

import Link from "next/link";
import {useCartStore} from "../../store/cartStore";

export default function FloatingCartButton() {
    const count = useCartStore((state) => state.count());

    if (count === 0) return null;

    return (
        <Link href="/cart-reservation" className="floating-cart">
            🛒
            <span className="cart-count">{count}</span>
        </Link>
    );
}