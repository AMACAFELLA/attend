import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const MrbHtml: React.FC<Props> = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <title>Attend</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
