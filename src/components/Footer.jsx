export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Bikes Zone. All rights reserved.</p>
        <p className="mt-1">Made with 💙 by Mriganka Das</p>
      </div>
    </footer>
  );
}
