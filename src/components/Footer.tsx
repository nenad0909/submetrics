import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo.svg" alt="Submetrics" width={140} height={28} className="brightness-0 invert mb-4" />
            <p className="text-sm text-white/50 leading-relaxed">
              Simple subscription analytics for indie founders. Know your numbers, grow your business.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><Link href="/features" className="text-sm hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link></li>
              <li><span className="text-sm text-white/30">API Docs (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link></li>
              <li><span className="text-sm text-white/30">Blog (Coming Soon)</span></li>
              <li><span className="text-sm text-white/30">Changelog</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm hover:text-primary transition-colors cursor-pointer">Twitter / X</span></li>
              <li><span className="text-sm hover:text-primary transition-colors cursor-pointer">IndieHackers</span></li>
              <li><span className="text-sm hover:text-primary transition-colors cursor-pointer">GitHub</span></li>
              <li><a href="mailto:hello@submetrics.io" className="text-sm hover:text-primary transition-colors">hello@submetrics.io</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Nenad Milicevic. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
