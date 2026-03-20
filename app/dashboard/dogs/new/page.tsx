export default function AddDogPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">Add a New Dog</h1>
      <p className="text-muted-foreground mb-6">
        Enter your dog's details to begin.
      </p>
      <form className="space-y-4 max-w-md">
        {/* Placeholder: To be replaced with real fields on the next roadmap step */}
        <div>
          <input
            className="w-full rounded border px-3 py-2"
            placeholder="Dog Name"
            type="text"
            disabled
          />
        </div>
        <button
          type="button"
          disabled
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-base font-semibold text-background shadow opacity-50 cursor-not-allowed"
        >
          Save Dog
        </button>
      </form>
    </section>
  );
}