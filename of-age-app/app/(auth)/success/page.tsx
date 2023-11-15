"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to redirect the user after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');  // Replace '/desired-path' with the route you want to redirect to
    }, 3000);  // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className='text-black text-xl'>
      Thank you for submitting!
    </div>
  );
}

export default SuccessPage;
