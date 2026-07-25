import Link from "next/link";

export default async function Note({ params }) {
  const { slug } = await params;
  const title =
    slug === "building-with-intention"
      ? "Building with intention"
      : "A note from Yash";
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Link href="/">← Back home</Link>
      <p
        style={{
          marginTop: 72,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: ".1em",
        }}
      >
        NOTES / 2026
      </p>
      <h1
        style={{
          fontSize: "clamp(48px, 10vw, 100px)",
          letterSpacing: "-.08em",
          lineHeight: 0.85,
        }}
      >
        {title}
      </h1>
      <p
        style={{ maxWidth: 580, fontSize: 20, lineHeight: 1.5, marginTop: 42 }}
      >
        The best digital products begin with a simple question: what deserves
        the user’s attention? Good engineering then makes that answer feel
        effortless.
      </p>
    </main>
  );
}
