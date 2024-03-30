export interface InvoiceProps {
    fullName: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        phoneNumber: string;
    };
    date: Date;
    recipient: {
        fullName: string;
        companyCode: string;
    };
    projectRole: string;
    description: string;
    totalHours: number;
    invoiceNumber: number;
    specialNotes: string;
    hourlyRate: number;
}