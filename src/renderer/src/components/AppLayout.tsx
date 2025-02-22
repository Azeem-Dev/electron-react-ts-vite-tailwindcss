import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<'main'>): JSX.Element => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}
export const Sidebar = ({
  className,
  children,
  ...props
}: ComponentProps<'aside'>): JSX.Element => {
  return (
    <aside
      className={twMerge('w-[250px] mt-[10px] h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
      {children}
    </aside>
  )
}
export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }: ComponentProps<'div'>, ref): JSX.Element => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto pl-2', className)} {...props}>
      {children}
    </div>
  )
)
Content.displayName = 'Content'
