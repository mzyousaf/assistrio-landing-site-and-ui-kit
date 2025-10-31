"use client";

import { useEffect } from "react";
import ErrorPage from "@/components/ErrorPage";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Error caught by error boundary
    }, [error]);

    return (
        <ErrorPage
            type="error"
            message={error.message}
            onReset={reset}
            showBackButton={false}
        />
    );
}
