'use client'

import Image from 'next/image'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Hint } from '@/components/hint'

export const Item = ({
  id,
  name,
  imageUrl,
}: {
  id: string
  name: string
  imageUrl: string
}) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const handleClick = () => {
    if (!setActive) return
    setActive({ organization: id })
  }

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          fill
          sizes="36px"
          src={imageUrl}
          alt={name}
          onClick={handleClick}
          className={cn(
            'rounded-md cursor-pointer opacity-75 hover:opacity-100 transition',
            isActive && 'opacity-100'
          )}
        />
      </Hint>
    </div>
  )
}
