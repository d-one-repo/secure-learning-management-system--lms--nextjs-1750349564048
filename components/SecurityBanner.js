```js
import { Shield } from 'lucide-react';

export default function SecurityBanner() {
  return (
    <div className="bg-springer-dark text-white py-3 px-4 flex items-center justify-center">
      <Shield className="w-5 h-5 mr-2" />
      <span className="text-sm font-medium">
        All educational materials are protected with advanced encryption and access controls.
      </span>
    </div>
  );
}
```