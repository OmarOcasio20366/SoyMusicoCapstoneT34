import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ): (
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet />
          </section>

          <img

            src="public/assets/images/male-and-female-musicians-in-recording-studio-2023-11-27-04-52-18-utc.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          
          />

        </>
      )}
    </>
  );
}

export default AuthLayout