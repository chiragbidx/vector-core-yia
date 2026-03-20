export default function DogsListPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">Dogs</h1>
      <p className="text-muted-foreground mb-6">
        You haven’t added any dogs yet.
      </p>
      <a
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition-colors"
        href="/dashboard/dogs/new"
      >
        Add Dog
      </a>
    </section>
  );
}