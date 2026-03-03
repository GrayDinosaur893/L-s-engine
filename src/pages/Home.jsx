function Home({ navigate }) {
  return (
    <section className="hero">
      <h1>L Deduction Engine</h1>
      <p>Analyze. Deduce. Conclude.</p>
      <button onClick={() => navigate("logic")}>
        Start Analysis
      </button>
    </section>
  );
}

export default Home;