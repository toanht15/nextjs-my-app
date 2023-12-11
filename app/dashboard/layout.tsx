export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </section>
    );
}
