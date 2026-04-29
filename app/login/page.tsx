"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Button,
  PasswordInput,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/site-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Incorrect password.");
        setLoading(false);
        return;
      }
      const from = searchParams.get("from");
      const safe =
        from && from.startsWith("/") && !from.startsWith("//") ? from : "/";
      router.replace(safe);
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-4 py-16">
      <Paper
        className="w-full max-w-sm border border-zinc-800/90 bg-zinc-900/50 shadow-xl"
        p="xl"
        radius="lg"
      >
        <Stack gap="md">
          <div>
            <Title order={2} className="text-zinc-100" size="h3">
              Enter site
            </Title>
            <Text size="sm" className="mt-1 text-zinc-500">
              This portfolio is password protected.
            </Text>
          </div>
          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              <PasswordInput
                label="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
                autoComplete="current-password"
                error={error}
                classNames={{
                  input: "bg-zinc-950/80 border-zinc-700 text-zinc-100",
                  label: "text-zinc-400",
                }}
              />
              <Button type="submit" loading={loading} fullWidth>
                Continue
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-full flex-1 items-center justify-center text-zinc-500">
          Loading…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
