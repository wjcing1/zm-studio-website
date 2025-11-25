// Footer component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Studio</h4>
            <p className="mt-2 text-sm text-neutral-600">ZM Studio — Exhibition & Architecture. Milan, Italy.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Contact</h4>
            <p className="mt-2 text-sm text-neutral-600">
              <a href="mailto:info@zmstudiomilano.it" className="hover:underline">
                info@zmstudiomilano.it
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Social</h4>
            <nav className="mt-2 grid gap-1 text-sm text-neutral-700">
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <a href="#" className="hover:underline">
                X / Twitter
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Newsletter</h4>
            <div className="mt-2 flex gap-2">
              <Input placeholder="Your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} ZM Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
