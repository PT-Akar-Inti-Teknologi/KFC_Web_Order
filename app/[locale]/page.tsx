import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations('IndexPage')
  return (
    <div   className="container mx-auto py-24">
      <div className="flex min-h-screen flex-col">
      <h1 className="text-5xl font-bold mb-2">{t("title")}</h1>
      <p className="">{t("description")}</p>
    </div>
    </div>
  );
}
