import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
}

export default function SEOMeta({ title, description }: Props) {
  const fullTitle = `${title} | ALMO`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
