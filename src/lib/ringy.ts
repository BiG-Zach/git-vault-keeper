export interface RingyLead {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    leadSource: string;
    [key: string]: string;
}

export async function submitToRingy(lead: RingyLead): Promise<void> {
    const response = await fetch('/api/ringy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead),
    });

    if (!response.ok) {
        throw new Error('Failed to submit lead to Ringy');
    }
}
