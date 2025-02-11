"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ReloadIcon } from "@radix-ui/react-icons"

type ErrorType = "username" | "password" | "general"

interface ErrorState {
  type: ErrorType
  message: string
}

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorState | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    }

    try {
      const response = await fetch("https://delta-indie.vercel.app/api/auth/login&quot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "An error occurred during login")
      }

      // Save token in localstorage
      if (data.token) {
        localStorage.setItem("authToken", data.token)
        // Save token expiry
        if (data.expiresIn) {
          const expiryTime = new Date().getTime() + data.expiresIn * 1000
          localStorage.setItem("tokenExpiry", expiryTime.toString())
        }
      }

      // Login successful
      router.push("/dashboard") // Redirect to dashboard/home page
    } catch (err) {
      if (err instanceof Error) {
        // Handle specific error type
        if (err.message.includes("username")) {
          setError({ type: "username", message: "Invalid username. Please check and try again." })
        } else if (err.message.includes("password")) {
          setError({ type: "password", message: "Incorrect password. Please try again." })
        } else {
          setError({ type: "general", message: err.message })
        }
      } else {
        setError({ type: "general", message: "An unexpected error occurred. Please try again." })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h1>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-primary hover:text-primary/90">
              Register here
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="jayp"
                className={error?.type === "username" ? "border-red-500" : ""}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className={error?.type === "password" ? "border-red-500" : ""}
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}

