function Hero({ onStart }) {
  return (
    <section className="hero">
      <h1>L Deduction Engine</h1>
      <p>Analyze. Deduce. Conclude.</p>
      <button onClick={onStart}>Start Analysis</button>
    </section>
  );
}

export default Hero;