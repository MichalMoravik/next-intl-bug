import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hi",
    template: `%s | Hi`,
  },
};

export const viewport: Viewport = {
  colorScheme: "only light",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return children;
}
