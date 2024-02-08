import { SignIn } from "@clerk/clerk-react";

export default function Auth() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <SignIn />
    </div>
  )
}
