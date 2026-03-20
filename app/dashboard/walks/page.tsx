export default function WalksPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">Dog Walks</h1>
      <p className="text-muted-foreground mb-6">
        No walks scheduled yet.
      </p>
      <a
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition-colors"
        href="#"
      >
        Schedule Walk
      </a>
    </section>
  );
}