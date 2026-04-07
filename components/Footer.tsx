export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Viktor Holovin. Built with Next.js.</p>
        <p>PortfolioNextJS + PortfolioSpring</p>
      </div>
    </footer>
  )
}
