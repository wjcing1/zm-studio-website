import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mt-4">{t.notFound.title}</h2>
        <p className="text-gray-600 mt-2 mb-8">{t.notFound.description}</p>
        <Button asChild>
          <Link to="/">{t.notFound.backHome}</Link>
        </Button>
      </div>
    </div>
  );
}
