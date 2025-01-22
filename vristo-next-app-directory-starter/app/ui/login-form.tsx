'use client';
 
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../login/actions';

 
export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined); 
 
  return (
    <form action={dispatch} className="h-[70vh]">
      <div className="flex-1 rounded-lg pl-6 pb-7 pt-8 w-[500px]">
        <div className="flex flex-col items-center">
        <h1 className= "mb-3 text-lg uppercase text-blue-600">
          Welcome Back !
        </h1>
        <h2>
          Sign in to continue with Botswana eCSRM
        </h2>
        </div>
        <div className="w-11/12">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="-mb-4">
            <a href="../auth/forgotpassword" className="text-xs font-medium text-gray-600 hover:underline hover:text-blue-600 flex justify-end">Forgot password?</a>
            </div>
            </div>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
 
function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <div className="flex flex-col">
        <label className="md:w-2/3 block text-gray-500 mt-6 font-bold">
      <input className="mr-2 leading-tight" type="checkbox" />
      <span className="text-sm">
       Remember Me
      </span>
    </label>
    <Button className="mt-4 w-full md:w-11/12" aria-disabled={pending}>
     <p className='flex justify-center ml-44'>Sign In</p>  <ArrowRightIcon className="ml-auto w-5 text-gray-50" />
    </Button>
    <p className="text-sm font-light text-black flex mt-6 justify-center">
                      Don't have an account? <a href="../auth/signup" className="font-medium text-blue-600 hover:underline dark:text-primary-500 ml-2"> Create account</a>
                  </p>
    </div>
  );
}