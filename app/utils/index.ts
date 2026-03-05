

export function calculateNights(arrival: string, departure: string): number {
    const start = new Date(arrival).getTime();
    const end = new Date(departure).getTime();

    return Math.max((end - start) / (1000 * 60 * 60 * 24), 1);
}