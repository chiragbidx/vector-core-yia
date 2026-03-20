export default function ClientsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">Clients</h1>
      <p className="text-muted-foreground mb-6">
        No clients found. Add a new client to begin.
      </p>
      <a
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition-colors"
        href="#"
      >
        Invite a Client
      </a>
    </section>
  );
}