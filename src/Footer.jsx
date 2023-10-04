import styles from './Footer.module.css'

export function Footer() {
  return (
    <div className={styles.attribution}>
      <span>Challenge by</span> <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"> Frontend Mentor</a>.
      <span>Coded by</span> <a href="https://www.linkedin.com/in/francisco-rosendo-coelho/" target="_blank" rel="noreferrer">Francisco Rosendo</a>.
    </div>
  )
}