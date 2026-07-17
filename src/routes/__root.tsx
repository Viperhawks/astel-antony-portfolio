import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://astel-antony-portfolio.lovable.app";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Astel Antony — Generative AI Engineer & Cybersecurity Portfolio" },
      { name: "description", content: "Astel Antony — Generative AI Engineer, Cybersecurity professional and Founder of Padikam, from Kerala, India. Explore projects, experience and contact." },
      { name: "author", content: "Astel Antony" },
      { name: "keywords", content: "Astel Antony, Astel, Antony, Astel Antony portfolio, Astel Antony Kerala, Generative AI Engineer, Cybersecurity, Padikam founder" },
      { property: "og:title", content: "Astel Antony — Generative AI Engineer & Cybersecurity" },
      { property: "og:description", content: "Official portfolio of Astel Antony — Generative AI Engineer, Cybersecurity professional and Founder of Padikam." },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: "Astel Antony" },
      { property: "og:url", content: SITE_URL },
      { property: "profile:first_name", content: "Astel" },
      { property: "profile:last_name", content: "Antony" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Astel Antony — Generative AI Engineer & Cybersecurity" },
      { name: "twitter:description", content: "Official portfolio of Astel Antony — Generative AI Engineer & Cybersecurity professional." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4764af89-e800-46f2-9b92-6628a8623e6f" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4764af89-e800-46f2-9b92-6628a8623e6f" },
      { name: "google-site-verification", content: "pU4oKyds-pYIJQZFQc2EZEVUNrvjQe1ObAXGK_9yMQw" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Astel Antony",
          alternateName: ["Astel", "Astel A"],
          url: SITE_URL,
          image: `${SITE_URL}/astel-og.jpg`,
          jobTitle: "Generative AI Engineer & Cybersecurity Professional",
          description: "Generative AI Engineer, Cybersecurity professional and Founder of Padikam.",
          nationality: "Indian",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          worksFor: { "@type": "Organization", name: "Padikam", url: "https://padikam.vercel.app/" },
          sameAs: [
            "https://github.com/Viperhawks",
            "https://padikam.vercel.app/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Astel Antony",
          url: SITE_URL,
          author: { "@type": "Person", name: "Astel Antony" },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
