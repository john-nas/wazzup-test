import Menu from '../sections/Menu'

function MenuPage() {
  return (
    <>
      <section className="menu-intro" aria-labelledby="menu-page-heading">
        <div className="container">
          <p className="eyebrow">The menu</p>
          <h1 id="menu-page-heading">Falafel, made fresh.</h1>
          <p>Everything is plant-based. Pick a wrap, a box or one of Ahmad's specials.</p>
        </div>
      </section>
      <Menu />
    </>
  )
}

export default MenuPage
