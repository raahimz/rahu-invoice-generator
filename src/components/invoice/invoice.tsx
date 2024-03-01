import { useEffect } from "react";
import { Container } from "./container";
import { InvoiceProps } from "./invoice.props";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function Invoice(props: InvoiceProps) {
    const getInvoiceId = () => {
        const part1 = props.recipient.companyCode;

        const year = String(props.date.getFullYear()).slice(2, 4);
        const month = String(props.date.getMonth() + 1).padStart(2, '0');
        const day = String(props.date.getDate()).padStart(2, '0');
        const part2 = `${year}${month}${day}`

        const part3 = String(props.invoiceNumber).padStart(4, '0');

        return `${part1}-${part2}-${part3}`;
    };
    
    useEffect(() => {
        console.log(props.recipient.fullName)
    }, [props.recipient.fullName])

    return (
        <div className='bg-white text-black flex flex-col h-[1050px] justify-between gap-12 p-8'>
            <div className='flex justify-between flex-row items-center text-center'>
                <div className='text-2xl w-[200px] text-teal-500 font-bold'>
                    {props.fullName}
                </div>
                <div className='flex flex-col items-center w-[33.33%]'>
                    <p>{props.address.line1}</p>
                    <p>{props.address.line2}</p>
                    <p>{props.address.phoneNumber}</p>
                </div>
                <div className='text-3xl w-[200px] text-center'>
                    Invoice
                </div>
            </div>
            <div className='flex justify-end flex-row items-center gap-2'>
                <div className='flex flex-col items-end gap-1 p-2'>
                    <p>Month</p>
                    <p>Year</p>
                    <p>Invoice #</p>
                </div>
                <div className='flex flex-col border-2 border-black rounded-sm gap-1 p-2'>
                    <p>{month[props.date.getMonth()]}</p>
                    <div className='h-[1px] bg-black' />
                    <p>{props.date.getFullYear()}</p>
                    <div className='h-[1px] bg-black' />
                    <p>{getInvoiceId()}</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-2'>
                    <Container
                        title='To'
                        body={<div className="whitespace-pre-line">
                            <p>{props.recipient.fullName}</p>
                        </div>}
                        width={'full'}
                    />
                    <Container
                        title='Role'
                        body={<div>
                            <p>{props.projectRole}</p>
                        </div>}
                        width={'full'}
                    />
                </div>
                <div className='flex flex-row gap-2'>
                    <Container
                        title='Description'
                        body={<div className="whitespace-pre-line">
                            <p>{props.description}</p>
                        </div>}
                        width={'3/4'}
                    />
                    <Container
                        title='Total Hours'
                        body={<div>
                            <p>{props.totalHours}</p>
                        </div>}
                        width={'1/4'}
                    />
                </div>
                <Container
                    title='Special notes/instructions'
                    body={<div className="whitespace-pre-line">
                        {props.specialNotes}
                    </div>}
                    width={'full'}
                />
            </div>
            <div className='flex flex-row items-center'>
                <div className='text-center w-1/3'>
                    <p className='text-sm'>digital document not requiring signature</p>
                    <p className='text-sm text-gray-400'>Signature & Stamp</p>
                </div>
                <div className='text-center w-1/3'>
                    <p className='text-sm'>{props.fullName}</p>
                    <p className='text-sm text-gray-400'>Name</p>
                </div>
                <div className='text-center w-1/3'>
                    <p className='text-sm'>{props.date.toLocaleDateString()}</p>
                    <p className='text-sm text-gray-400'>Date</p>
                </div>
            </div>
        </div>
    );
}