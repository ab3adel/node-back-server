import { useTranslation } from "react-i18next"
import './language-switcher.scss'
export const LanguageSwitcher = (props: any) => {
  const {i18n}=useTranslation()
  const changeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
          i18n.changeLanguage('ar')
          document.body.classList.add('rtl')
          localStorage.setItem("lang", "ar")
      }
      else {
        i18n.changeLanguage('en')
          document.body.classList.remove('rtl')
          localStorage.setItem("lang", "en")
      }
  }

  return (
      <label style={{ display: 'inline-block', cursor: 'pointer' }} className="language-toggle">
          <input className='toggle-checkbox' type='checkbox' onChange={changeLang} defaultChecked={localStorage.getItem("lang") ? localStorage.getItem("lang") === 'ar' : false}></input>
          <div className='toggle-slot'>
              <div className="ar">En</div>
              <div className='toggle-button'></div>
              <div className="en">عربي</div>
          </div>
      </label>
  )

}