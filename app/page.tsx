import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <p>This screen is for authenticated users</p>
      <UserButton />
    </div>
  )
}
