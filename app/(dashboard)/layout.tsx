import { Sidebar } from './_components/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">{children}</div>
    </main>
  )
}
