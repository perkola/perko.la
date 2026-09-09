export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {name}
      </p>
      <p>
        Built with{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React
        </a>
        ,{" "}
        <a href="https://vite.dev/" target="_blank" rel="noreferrer">
          Vite
        </a>{" "}
        &amp;{" "}
        <a
          href="https://fonts.google.com/specimen/Fraunces"
          target="_blank"
          rel="noreferrer"
        >
          Fraunces
        </a>
        .
      </p>
    </footer>
  );
}
