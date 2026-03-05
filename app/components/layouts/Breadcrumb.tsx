"use client";

import Link from "next/link";


type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    title: string;
    items?: BreadcrumbItem[];
};

export default function Breadcrumb({ title, items = [] }: BreadcrumbProps) {
    return (
        <div className="breadcumb-banner">
            <div
                className="breadcumb-wrapper"
                style={{ backgroundImage: "url(/img/bg/breadcumb-bg.jpg)" }}
            >
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">{title}</h1>

                        <ul className="breadcumb-menu">
                            {items?.map((item, index) => (
                                <li key={index}>
                                    {item.href ? (
                                        <Link href={item.href}>{item.label}</Link>
                                    ) : (
                                        item.label
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}