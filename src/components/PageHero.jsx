// Inner-page hero. With `aside`, the text and the aside sit in two columns.
function PageHero({ label, kicker, title, text, aside }) {
  const copy = (
    <>
      <span className="page-hero-kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  );

  return (
    <section className="page-hero" aria-label={label}>
      <div className={`wrap page-hero-inner${aside ? ' page-hero-inner--split' : ''}`}>
        {aside ? <><div>{copy}</div>{aside}</> : copy}
      </div>
    </section>
  );
}

export default PageHero;
