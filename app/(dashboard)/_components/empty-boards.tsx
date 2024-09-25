'use client'

import { useOrganization } from '@clerk/nextjs'
import Image from 'next/image'

import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { useApiMutation } from '@/hooks/use-api-mutation'

export const EmptyBoards = () => {
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutation(api.board.create)

  const handleClick = () => {
    if (!organization) return

    mutate({
      orgId: organization.id,
      title: 'Untitled',
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" height={110} width={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization.
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={handleClick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  )
}
