export default function AdminLayout({ children }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-8">{children}</div>
    </div>
  );
}
