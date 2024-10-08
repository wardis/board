'use client'

import { Plus } from 'lucide-react'

import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create)

  const handleClick = () => {
    mutate({
      orgId: orgId,
      title: 'Untitled',
    })
      .then((id) => {
        toast.success(`Board created!`)
        // TODO: redirect to board/{id}
      })
      .catch((error) => toast.error(error.message))
  }

  return (
    <button
      disabled={pending || disabled}
      onClick={handleClick}
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6',
        (pending || disabled) && 'opacity-75'
      )}
    >
      <div />
      <Plus className="size-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  )
}
