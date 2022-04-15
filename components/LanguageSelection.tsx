import { useContext, useState, useEffect } from 'react'
import UserContext from './UserContext'
import styles from './languageselection.module.css'

function Button({ langCode, languageName, setLanguage, languageSelected, setLanguageSelected }) {
  return (
    <div className={styles.button}>
      <a
        className={styles.icon}
        onClick={() => {
          setLanguage(langCode)
          setLanguageSelected(langCode)
          localStorage.setItem('language', langCode)
        }}
        onKeyPress={() => {
          setLanguage(langCode)
          setLanguageSelected(langCode)
          localStorage.setItem('language', langCode)
        }}
        role="button"
        tabIndex={0}
        style={{
          filter: languageSelected === langCode ? 'grayscale(0)' : 'grayscale(1)',
        }}
      >
        <img
          src={`../images/lang-flag/${langCode}.png`}
          alt={`${languageName}`}
          title={`${languageName}`}
          draggable="false"
        />
      </a>
    </div>
  )
}

function LanguageList() {
  const { selectLanguage } = useContext(UserContext)
  const [languageSelected, setLanguage] = useState('None')

  useEffect(() => {
    const langValue = window.localStorage.getItem('language')
    if (langValue != null) {
      setLanguage(langValue)
      selectLanguage(langValue)
    } else {
      setLanguage('gb')
      selectLanguage('gb')
      localStorage.setItem('language', 'gb')
    }
  }, [0])

  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <Button
          langCode="gb"
          languageName="English"
          setLanguage={setLanguage}
          languageSelected={languageSelected}
          setLanguageSelected={selectLanguage}
        />
        <Button
          langCode="jp"
          languageName="日本語"
          setLanguage={setLanguage}
          languageSelected={languageSelected}
          setLanguageSelected={selectLanguage}
        />
        <Button
          langCode="de"
          languageName="Deutsch"
          setLanguage={setLanguage}
          languageSelected={languageSelected}
          setLanguageSelected={selectLanguage}
        />
        <Button
          langCode="fr"
          languageName="Français"
          setLanguage={setLanguage}
          languageSelected={languageSelected}
          setLanguageSelected={selectLanguage}
        />
      </div>
    </div>
  )
}

const LanguageSelection = () => {
  return <LanguageList />
}

export default LanguageSelection
