import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  image?: string;
}

const DEFAULT_IMAGE = "https://almobrasil.com.br/og-image.jpg";

export default function SEOMeta({ title, description, image }: Props) {
  const fullTitle = `${title} | ALMO`;
  const ogImage = image || DEFAULT_IMAGE;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
