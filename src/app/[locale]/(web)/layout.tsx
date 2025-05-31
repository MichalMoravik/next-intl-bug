import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string }>;

export default async function WebLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  console.log("*****************");
  console.log("WebLayout locale:", locale);
  console.log("*****************");

  return <div className="flex">{children}</div>;
}
