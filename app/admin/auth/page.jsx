"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "@/app/loading";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useRouter();

  if (loading) {
    return <Loading />;
  }

  const handleAdminLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    try {
      const data = await res.json();

      if (res.ok) {
        navigate.push("/admin/blogs");
        toast.success("Login successful");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] gap-4">
      <h1 className="text-3xl font-bold">Admin Verification</h1>
      <form
        className="flex flex-col w-80 border border-gray-300 p-4 rounded shadow"
        onSubmit={handleAdminLogin}
      >
        <div className="my-4">
          <label>Username:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="my-4">
          <label>Password:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
      <Link
        href="/"
        className="text-blue-500 font-semibold mt-4 border border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white rounded transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
