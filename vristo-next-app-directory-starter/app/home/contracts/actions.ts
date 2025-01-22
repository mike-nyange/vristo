'use server';

import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  contractNo: z.string({invalid_type_error: 'Please provide a contract no.',}),
  tenderNo: z.string({invalid_type_error: 'Please provide a tender no.',}),
  supplierId: z.string({invalid_type_error: 'Please select a supplier.',}),
  productId: z.string({invalid_type_error: 'Please select a product.',}),
  dateSigned: z.string(),
  defaultPeriod: z.coerce.number().gt(0, { message: 'Please enter an amount greater than 0.' }), //change from string to number
  terminationPeriod: z.coerce.number().gt(0, { message: 'Please enter an amount greater than 0.' }), //change from string to number,
  amount: z.coerce.number().gt(0, {message: 'Please enter amount greater than 0.'}),
  currencyId: z.string({invalid_type_error: 'Please provide currency'}),
  forceMajeure: z.string(),
  description: z.string(),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
});

const CreateContract = FormSchema.omit({supplierTypeId: true, dateSigned: true,contractNo: true,tenderNo:true,
    productId:true,defaultPeriod:true,terminationPeriod:true,currencyId:true,
forceMajeure:true, description:true});
//const UpdateContract = FormSchema.omit({ id: true, date: true });


// This is temporary until @types/react-dom is updated
export type State = {
    errors?: {
      supplierId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
  };
   
 
export async function createContract(prevState:State, formData: FormData) {
    const id = 1;
    // Validate form fields using Zod
    const validatedFields = CreateContract.safeParse({
        supplierId: formData.get('supplierTypeId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Contract.',
        };
    }

    // Prepare data for insertion into the database
    const { supplierId, amount, status } = validatedFields.data;
    const dateSigned = new Date().toISOString().split('T')[0];
    

    try{
        
        const rawData = Object.fromEntries(formData);
        console.log(rawData);
        //send data to db after validating

    }catch(error){
        console.log('Error creating contract!');
    }
    revalidatePath('/home/contracts');
    redirect(`/home/contracts/${id}/view`);
}

export async function deleteContract(id:string){}

  