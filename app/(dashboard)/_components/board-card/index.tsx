'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

import { Overlay } from './overlay'
import { useAuth } from '@clerk/nextjs'
import { Footer } from './footer'

interface BoardCardProps {
  id: string
  title: string
  authorName: string
  authorId: string
  createdAt: number
  imageUrl: string
  orgId: string
  isFavorite: boolean
}

export default function BoardCard({
  id,
  title,
  authorName,
  authorId,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) {
  const { userId } = useAuth()
  const authorLabel = userId === authorId ? 'You' : authorName
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true })

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          authorLabel={authorLabel}
          title={title}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  )
}
