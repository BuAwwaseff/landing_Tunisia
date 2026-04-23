import { redirect } from "next/navigation";
import { localizeHref, resolveTunisiaLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PartnerRedirectPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = resolveTunisiaLocale(resolvedSearchParams);
  redirect(localizeHref("/partnership", locale));
}
