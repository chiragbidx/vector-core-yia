"use client";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome to WalkBuddy</h1>
        <p className="text-muted-foreground">
          Your dog walking business command center
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow">
          <h2 className="text-lg font-semibold mb-2">Get Started</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="/dashboard/dogs/new"
                className="text-primary hover:underline font-medium"
              >
                Add Your First Dog
              </a>
            </li>
            <li>
              <a
                href="/dashboard/walks"
                className="text-primary hover:underline font-medium"
              >
                Schedule a Walk
              </a>
            </li>
            <li>
              <a
                href="/dashboard/clients"
                className="text-primary hover:underline font-medium"
              >
                Invite a Client
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow flex flex-col items-center justify-center">
          <span className="text-muted-foreground text-center text-base">
            Your dashboard is ready.
            <br />
            As you add dogs, walks, and clients, stats and quick actions will show up here.
          </span>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow flex items-center justify-center">
          <span className="text-muted-foreground text-center">
            No walks yet? Start now!
          </span>
        </div>
      </div>
    </div>
  );
}