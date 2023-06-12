import { useEffect, useState } from "react"
import data from "./data/challenge.json"
import style from "./styles/App.module.css"

const App = () => {
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const buttons = [...new Set(data.map((item) => item.category))].map(
      (item) => ({ name: item, status: false })
    )

    setCategories(buttons)
  }, [])

  const handleFilter = (e) => {
    setCategories([
      ...categories.map((filter) =>
        filter.name === e.target.dataset.name
          ? { name: filter.name, status: !filter.status }
          : filter
      ),
    ])
  }

  return (
    <>
      <h1 className={style["main-title"]}>React challenge 2</h1>

      <div className={style.controls}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={style.inputs}>
          {categories &&
            categories.map((input) => (
              <button
                key={input.name}
                onClick={handleFilter}
                data-name={input.name}
                className={input.status ? `${style.active}` : null}
              >
                {input.name}
              </button>
            ))}
        </div>
      </div>

      <div className={style["image-grid"]}>
        {categories &&
          data
            .filter(
              (item) =>
                !categories.filter((elem) => elem.status).length ||
                categories.filter(
                  (elem) => elem.name === item.category && elem.status
                ).length
            )
            .filter(
              (item) =>
                !search.length ||
                item.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map((item) => (
              <img
                key={item.id}
                src={`http://localhost:5173/images/${item.picture}`}
                width="100%"
                height="250px"
                className={style.image}
              />
            ))}
      </div>
    </>
  )
}

export default App
