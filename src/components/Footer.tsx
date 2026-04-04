import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d0d" }} className="text-white/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo.svg" alt="Submetrics" width={140} height={28} className="brightness-0 invert mb-4" />
            <p className="text-sm text-white/35 leading-relaxed">
              Simple subscription analytics for indie founders. Know your numbers, grow your business.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-sm hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link></li>
              <li><span className="text-sm text-white/20">API Docs (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link></li>
              <li><span className="text-sm text-white/20">Blog (Coming Soon)</span></li>
              <li><span className="text-sm text-white/20">Changelog</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Connect</h4>
            <ul className="space-y-3">
              <li><span className="text-sm hover:text-primary transition-colors cursor-pointer">Twitter / X</span></li>
              <li><span className="text-sm hover:text-primary transition-colors cursor-pointer">IndieHackers</span></li>
              <li><span className="text-sm hover:text-primary transition-colors cursor-pointer">GitHub</span></li>
              <li><a href="mailto:hello@submetrics.io" className="text-sm hover:text-primary transition-colors">hello@submetrics.io</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Submetrics. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-white/25 hover:text-white/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-white/25 hover:text-white/50 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
