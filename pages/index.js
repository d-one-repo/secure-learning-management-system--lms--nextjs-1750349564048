```js
import Navbar from '../components/Navbar';
import SecurityBanner from '../components/SecurityBanner';
import SecureMaterialCard from '../components/SecureMaterialCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <SecurityBanner />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-springer-dark mb-6">
          Secure Learning Management System
        </h1>
        <p className="mb-8 text-gray-700 max-w-2xl">
          Welcome, Elsbeth Headley. Access Springer Nature Surgery’s secure medical education materials. All content is protected with advanced cybersecurity measures to ensure compliance and data privacy.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SecureMaterialCard
            title="Surgical Techniques"
            description="Peer-reviewed articles and videos on the latest surgical procedures."
            link="/materials/surgical-techniques"
            icon="Scalpel"
          />
          <SecureMaterialCard
            title="Case Studies"
            description="Real-world case studies with expert commentary."
            link="/materials/case-studies"
            icon="FileText"
          />
          <SecureMaterialCard
            title="CME Quizzes"
            description="Earn continuing medical education credits securely."
            link="/materials/cme-quizzes"
            icon="ShieldCheck"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
```