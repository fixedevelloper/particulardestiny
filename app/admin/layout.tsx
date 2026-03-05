import AdminLayout from "@/app/components/admin/AdminLayout";
import React from "react";
import './admin.css'
export default function Layout({ children }: { children: React.ReactNode }) {
    return <AdminLayout>{children}</AdminLayout>;
}