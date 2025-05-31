// Catching non-localized requests
import { routing } from "@/i18n/routing";

export default function NotFound() {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <main>
          <h1>Not Found</h1>
        </main>
      </body>
    </html>
  );
}
