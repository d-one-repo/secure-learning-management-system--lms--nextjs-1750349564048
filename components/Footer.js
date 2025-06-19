```js
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-springer-blue text-white py-4 mt-8">
      <div className="container mx-auto flex items-center justify-between px-4">
        <span className="text-sm">&copy; {new Date().getFullYear()} Springer Nature Surgery. All rights reserved.</span>
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs">Cybersecurity Compliant</span>
        </div>
      </div>
    </footer>
  );
}
```