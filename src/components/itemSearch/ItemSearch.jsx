import React from 'react'
import styles from './ItemSearch.module.scss'


const ItemSearch = ({ name, domain, logo, onClickItem }) => {
  return (
    <li className={styles.item} onClick={() => onClickItem(name)}>
      <img src={logo} alt={name} />
      <div className={styles.text}>
        <span className={styles.title}>{name}</span>
        <span className={styles.subtitle}>{domain}</span>
      </div>
    </li>
  )
}

export default ItemSearch