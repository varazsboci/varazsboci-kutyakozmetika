export type PortfolioCategorySlug =
  | "furdetes"
  | "trimmeles"
  | "vagas"
  | "elotte-utana";

export interface Photo {
  id: string;
  url: string;
  alt: string;
  category: PortfolioCategorySlug;
  albumId?: string;
  createdAt: string;
}

export interface Album {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverPhotoUrl: string;
  createdAt: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  // GDPR: a felhasználónak aktívan el kell fogadnia az adatkezelési tájékoztatót
  consent: boolean;
}
