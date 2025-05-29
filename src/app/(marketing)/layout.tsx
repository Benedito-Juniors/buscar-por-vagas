// app/jobs/layout.tsx ou app/layout.tsx dependendo da estrutura
import React from 'react';

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
