'use server';

import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createContract(formData: FormData) {
    const id = 1;
    try{
        //send data to db after validating

    }catch(error){
        console.log('Error creating contract!');
    }
    revalidatePath('/home/contracts');
    redirect(`/home/contracts/${id}/view`);
}

export async function deleteContract(id:string){}

  