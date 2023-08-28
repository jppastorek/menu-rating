export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Menu Ratings</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search items"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/item/1`}>Turtle Soup au Sherry</a>
              </li>
              <li>
                <a href={`/item/2`}>Shrimp and Tasso Henican</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }