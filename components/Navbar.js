```js
import { BookOpen, Lock, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-springer-blue text-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6" />
          <span className="font-semibold text-lg tracking-wide">Springer Nature Surgery LMS</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center hover:underline">
            <Lock className="w-5 h-5 mr-1" />
            Security
          </a>
          <a href="#" className="flex items-center hover:underline">
            <User className="w-5 h-5 mr-1" />
            Account
          </a>
        </div>
      </div>
    </nav>
  );
}
```