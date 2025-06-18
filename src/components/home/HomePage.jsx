function HomePage() {
  const token = localStorage.getItem('admin_token');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome Admin 👋</h1>
      <p className="text-sm text-gray-600">
        Your token is stored in localStorage.
      </p>
    </div>
  );
}

export default HomePage;
