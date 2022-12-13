import React from 'react'
import styles from './Search.module.scss'
import axios from 'axios'
import ItemSearch from '../itemSearch/ItemSearch'

const Search = () => {
  const [value, setValue] = React.useState('')
  const [arr, setArr] = React.useState([])
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    const apiUrl = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${value}`
    if (value.length > 0) {
      axios.get(apiUrl).then(res => setArr(res.data))
      setActive(true)
    } else {
      setArr([])
      setActive(false)
    }
  }, [value])

  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClickItem = (name) => {
    setValue(name)
  }

  return (
    <form className={styles.search}>
      <label>Компания</label>
      <input className={active ? `${styles.input} ${styles.active}` : styles.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <ul className={active ? styles.list : styles.none}>
        {arr && arr.map((list, i) =>
          <ItemSearch key={i} {...list} onClickItem={onClickItem} />
        )}
      </ul>
    </form>
  )
}

export default Search

