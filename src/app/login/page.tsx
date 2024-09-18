"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="px-4 rounded"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="px-4 rounded"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className=" px-4 py-2 bg-blue-500 text-white rounded my-2"
      >
        Login
      </button>
      <Link href="/signup">Visit signup page</Link>
    </div>
  );
}
