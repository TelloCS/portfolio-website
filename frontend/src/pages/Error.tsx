import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return (
      <div className="h-screen bg-[#21222D] text-[#A6AEC8] flex flex-col items-center justify-center font-poppins p-4">
        <h1 className="text-4xl font-bold mb-4 text-white">Oops!</h1>
        <p className="mb-8 text-lg">An unexpected application error occurred.</p>
        <Link
          to="/"
          className="px-6 py-3 border border-[#A6AEC8] rounded-md font-bold hover:bg-[#A6AEC8] hover:text-[#21222D] transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#21222D] text-[#A6AEC8] flex flex-col items-center justify-center overflow-hidden font-poppins p-4">
      <div className="text-center max-w-lg">

        <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest text-white mb-2">
          {error.status}
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
          {error.status === 404 ? "Page Not Found" : error.statusText}
        </h2>

        {error.data && (
          <p className="text-sm md:text-base mb-8 opacity-80">
            {typeof error.data === 'string' ? error.data : "The page you are looking for doesn't exist or has been moved."}
          </p>
        )}

        <div className="relative mt-8">
          <Link
            to="/"
            className="inline-block px-8 py-4 border border-[#A6AEC8] text-[#A6AEC8] rounded-md font-bold hover:bg-[#A6AEC8] hover:text-[#21222D] transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;