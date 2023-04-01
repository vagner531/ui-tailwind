import { Logo } from "./icons/Logo";

export function Sidebar() {
  return(
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 px-6 py-6">
      <Logo className="text-white h-4 w-auto"/>
    </aside>
  )
}