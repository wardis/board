import { Star } from 'lucide-react'

import { cn } from '@/lib/utils'

interface FooterProps {
  isFavorite: boolean
  authorLabel: string
  title: string
  createdAtLabel: string
  onClick: () => void
  disabled: boolean
}

export const Footer = ({
  isFavorite,
  authorLabel,
  title,
  createdAtLabel,
  onClick,
  disabled,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="truncate text-[13px] max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          'absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition text-muted-foreground hover:text-blue-600',
          disabled && 'cursor-not-allowed opacity-75'
        )}
      >
        <Star
          className={cn('size-4 ', isFavorite && 'fill-blue-600 text-blue-600')}
        />
      </button>
    </div>
  )
}
