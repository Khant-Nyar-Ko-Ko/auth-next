/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
      router.push("/login");
    }
  };

  const getUserDetails = async () => {
    const response = axios.get("/api/users/me");
    console.log((await response).data);
    setData((await response).data.data._id);
  };

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen py-2 gap-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="p-4 rounded bg-green-600">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded"
      >
        Get User Details
      </button>
    </div>
  );
}
