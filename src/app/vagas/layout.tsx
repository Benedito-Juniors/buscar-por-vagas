export default function JobsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="bg-gray-300  min-h-screen">{children}</div>
}