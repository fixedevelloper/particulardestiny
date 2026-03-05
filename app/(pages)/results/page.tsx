import React, {Suspense} from "react";
import ResultSuspendPage from "./ResultSuspend";

export default function ResultPage() {
    return(<Suspense fallback={<div className="spinner">Loading...</div>}>
        <ResultSuspendPage />
    </Suspense>)
}