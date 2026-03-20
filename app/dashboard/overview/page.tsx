export default function OverviewPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">Business Overview</h1>
      <p className="text-muted-foreground mb-6">
        Your activity summary will appear here as you start adding walks and clients.
      </p>
      <a
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition-colors"
        href="/dashboard/dogs/new"
      >
        Get Started
      </a>
    </section>
  );
}