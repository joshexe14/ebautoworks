
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} Battersby Garage. All rights reserved.
    </footer>
  );
}