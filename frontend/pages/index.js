import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

const IndexPage = ({
  session,
}) => {
  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <div className="w-full flex justify-end p-4">
        <Link href="/api/auth/signin" className="w-full max-w-xs">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </button>
        </Link>
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div className="w-full flex justify-end p-4">
        <Link href="/api/auth/signout" className="w-full max-w-xs">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <div className="navbar mb-4">
            {signOutButtonNode()}
            {signInButtonNode()}
          </div>
          <div className="text text-center text-red-500 font-semibold">
            You aren't authorized to view this page
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="navbar mb-4">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text text-center text-green-500 font-semibold">
          Hello world
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: {
      session,
    },
  };
};

export default IndexPage;