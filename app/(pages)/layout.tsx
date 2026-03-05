"use client";

import "./../globals.css";
import React, { useState, useRef } from "react";
import './../globals.css'
import {Header} from "../components/layouts/header";
import AppFooterSection from "../components/layouts/AppFooterSection";

export default function PageLayout({
                                       children,

                                   }: {
    children: React.ReactNode;
}) {

    return (
        <div id="main-wrapper" className="show">
            <Header />

            <div className="content-body">

                    {children}

            </div>
            <AppFooterSection />
        </div>
    );
}