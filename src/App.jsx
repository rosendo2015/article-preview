import './global.css'
import styles from './App.module.css'
import IconFaceBook from './assets/icon-facebook.svg'
import IconTweeter from './assets/icon-twitter.svg'
import IconPinterest from './assets/icon-pinterest.svg'
import IconShare from './assets/icon-share.svg'
import { BsHandThumbsUp } from 'react-icons/bs'
import UserAvatar from './assets/avatar.jpg'
import Drawers from './assets/drawers.jpg'
import { useState } from 'react'
import { Footer } from './Footer'

export function App() {
  const [showElement, setShowElement] = useState(false)
  const [aplaudir, setAplaudir] = useState(17)

  function handlerAplaudir() {
    setAplaudir(aplaudir + 1)
  }
  return (
    <div>
      <div className={styles.app}>
        <img
          className={styles.cover}
          src={Drawers}
        />
        <div className={styles.wrapperContent}>
          <main>

            <h3>
              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home
            </h3>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
            <button
              className={styles.aplaudir}
              onClick={handlerAplaudir}
            >
              <BsHandThumbsUp />
              Aplaudir
              <span>{aplaudir}</span>
            </button>
          </main>
          {
            showElement
              ?
              <div className={styles.share}>
                <div className={styles.social}>
                  <span>SHARE</span>
                  <img src={IconFaceBook} />
                  <img src={IconTweeter} />
                  <img src={IconPinterest} />
                </div>
                <div className={styles.avatarDesktop}>
                  <img src={UserAvatar} />
                  <div className={styles.avatarDesktopInfo}>
                    <strong>
                      Michelle Appleton
                    </strong>
                    <time>
                      28 Jun 2020
                    </time>
                  </div>
                </div>
                <button
                  onClick={() => setShowElement(false)}
                  className={styles.button}
                >
                  <img src={IconShare} />
                </button>
              </div>
              :
              <footer >
                <div className={styles.wrapperAvatar}>
                  <img
                    className={styles.avatar}
                    src={UserAvatar}
                    alt="photo de usuário" />
                  <div className={styles.avatarInfo}>
                    <strong>
                      Michelle Appleton
                    </strong>
                    <time>
                      28 Jun 2020
                    </time>
                  </div>
                </div>
                <button
                  onClick={() => setShowElement(true)}
                  className={styles.button}
                >
                  <img src={IconShare} />
                </button>
              </footer>
          }

        </div>
      </div>
      <Footer />
    </div>
  )
}

