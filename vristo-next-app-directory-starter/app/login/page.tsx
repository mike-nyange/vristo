import BCMSLogo from '../bcms-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
 
export default function LoginPage() {
  return (   
    <main className="items-center justify-center h-[84.5vh]">
    
      <div className="relative mx-auto items-center flex h-96 w-full max-w-[1200px] h-auto flex-row p-0 mt-10 bg-blue-600 mt-28 rounded rounded-lg shadow-md">        
        <div className="bg-blue-600 lg:block w-1/2 md:w-1/2 xl:w-1/2 h-96">
          <div className="w-32 text-white flex flex-row ml-44 items-center md:w-auto pl-6">
              <BCMSLogo/>
          </div>
        </div>
        <div className="bg-white w-full lg:max-w-full md:w-1/2 xl:w-1/2 h-100 mb-0 flex items-center justify-center">
          <LoginForm />
        </div> 
        </div>       
    </main>
  );
}