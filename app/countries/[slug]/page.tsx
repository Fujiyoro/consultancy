import { getCountryData, getAllCountries } from '@/lib/countries-data';
import { CountryPageWrapper } from '@/components/country-page-wrapper';
import Link from 'next/link';

export async function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const country = getCountryData(resolvedParams.slug);
  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The country page you are looking for does not exist.',
    };
  }

  return {
    title: `Study in ${country.name} | EduPath`,
    description: country.overview,
    openGraph: {
      title: `Study in ${country.name} | EduPath`,
      description: country.overview,
      images: [country.image],
    },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const country = getCountryData(resolvedParams.slug);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Country Not Found</h1>
          <p className="text-foreground/70 mb-8">The destination you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-primary font-semibold hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return <CountryPageWrapper country={country} />;
}
