import Breadcrumb from "../../components/layouts/Breadcrumb";
import React from "react";

export default function PromotionPage() {

    return(
        <>
            <Breadcrumb
                title={'Promotions'}
                items={[
                    { label: "Home", href: "/" },
                    { label: "Promotions", href: "/promotions" },
                ]}
            />
        </>
    )
}