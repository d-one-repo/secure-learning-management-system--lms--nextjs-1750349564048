```js
import { Scalpel, FileText, ShieldCheck } from 'lucide-react';

const iconMap = {
  Scalpel: Scalpel,
  FileText: FileText,
  ShieldCheck: ShieldCheck
};

export default function SecureMaterialCard({ title, description, link, icon }) {
  const IconComponent = iconMap[icon] || FileText;
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col border border-gray-100 hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <IconComponent className="w-7 h-7 text-springer-blue mr-2" />
        <h2 className="text-xl font-semibold text-springer-dark">{title}</h2>
      </div>
      <p className="text-gray-700 flex-1">{description}</p>
      <a
        href={link}
        className="mt-4 inline-flex items-center text-springer-blue font-medium hover:underline"
      >
        Access Material
      </a>
    </div>
  );
}
```