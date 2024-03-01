import { DatePicker } from "@/components/date-picker";
import { Invoice } from "@/components/invoice";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const [fullName, setFullName] = useState('Raahim Zeeshan');
  const [addressLine1, setAddressLine1] = useState('166, Street No. 11, Shaheed-e-Millat');
  const [addressLine2, setAddressLine2] = useState('Road, Karachi, 74800, Pakistan');
  const [phoneNumber, setPhoneNumber] = useState('Tel: +92 331 3640109');
  const [date, setDate] = useState(new Date());
  const [companyCode, setCompanyCode] = useState('2272');
  const [projectRole, setProjectRole] = useState('Jr. Software Developer');
  const [description, setDescription] = useState('Lorem Ipsum Doler Emet');
  const [totalHours, setTotalHours] = useState(10.5);
  const [invoiceNumber, setInvoiceNumber] = useState(19);
  const [recipientFullName, setRecipientFullName] = useState(`Suzanne Evers
Barbarians, LLC
San Francisco, US
`);
  const [specialNotes, setSpecialNotes] = useState(`Payoneer Payment ID:
Muhammad Zeeshan
Customer ID: 56305267
dr.promohands@gmail.com`);

  const invoiceRef = useRef(null);

  const getInvoiceTitle = () => {
    const part1 = companyCode;

    const year = String(date.getFullYear()).slice(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const part2 = `${year}${month}${day}`

    const part3 = String(invoiceNumber).padStart(4, '0');

    return `Invoice_M_Raahim_${part1}_${part2}_${part3}`;
  };

  const downloadClickedHandler = useReactToPrint({
    documentTitle: getInvoiceTitle(),
    content: () => invoiceRef.current,
  });


  return (
    <div className='p-4'>
      <div className='flex flex-row gap-8 border-2 rounded-md p-8 w-fit'>
        {/* <div className='flex flex-col gap-4 w-[0]'>
          {/* <Input
            variant='standard'
            label='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            color='teal'
            crossOrigin={undefined}
          />
          <Input
            variant='standard'
            label='Address Line #1'
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            color='teal'
            crossOrigin={undefined}
          />
          <Input
            variant='standard'
            label='Address Line #2'
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            color='teal'
            crossOrigin={undefined}
          />
          <Input
            variant='standard'
            label='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            color='teal'
            crossOrigin={undefined}
          /> 
          
        </div> */}
        <div className='flex flex-col gap-4 w-96'>
          {/* <Input
            variant='standard'
            label='Company Code'
            value={companyCode}
            onChange={(e) => setCompanyCode(e.target.value)}
            color='teal'
            crossOrigin={undefined}
          /> */}
          {/* <Input
            variant='standard'
            label='Project Role'
            value={projectRole}
            onChange={(e) => setProjectRole(e.target.value)}
            color='teal'
            crossOrigin={undefined}
          /> */}
          <Input
            variant='standard'
            label='Invoice Number'
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(parseInt(e.target.value))}
            type='number'
            color='teal'
            crossOrigin={undefined}
          />
          <Input
            variant='standard'
            label='Total Hours'
            value={totalHours}
            onChange={(e) => setTotalHours(parseFloat(e.target.value))}
            type='number'
            color='teal'
            crossOrigin={undefined}
          />
          <DatePicker
            date={date}
            setDate={setDate}
          />
        </div>
        <div className='flex flex-col gap-4 w-96'>
          {/* <Textarea
            label='Recipient'
            value={recipientFullName}
            onChange={(e) => setRecipientFullName(e.target.value)}
            color='teal'
          /> */}
          <Textarea
            label='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            color='teal'
          />
          {/* <Textarea
            label='Special Notes'
            value={specialNotes}
            onChange={(e) => setSpecialNotes(e.target.value)}
            color='teal'
          /> */}
          <Button onClick={() => downloadClickedHandler()} placeholder={undefined} color="teal" variant="outlined">
            Download
          </Button>
        </div>
      </div>
      <br />
      <div className='w-[802px] min-h-[1050px] drop-shadow-lg' ref={invoiceRef}>
        <Invoice
          fullName={fullName}
          address={{
            line1: addressLine1,
            line2: addressLine2,
            phoneNumber: phoneNumber
          }}
          date={date}
          recipient={{
            fullName: recipientFullName,
            companyCode: companyCode
          }}
          projectRole={projectRole}
          description={description}
          totalHours={totalHours}
          invoiceNumber={invoiceNumber}
          specialNotes={specialNotes}
        />
      </div>
    </div>
  );
}
