import styles from './styles.module.css'
import React, {useState} from 'react'
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import logo from '#assets/logo.svg'


const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false)

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Logo/>
        <Links/>
      </div>
      <div className={styles.sign}>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className={styles.menu}>
        {menuShown
          ? <CrossIcon onClick={() => setMenuShown(false)}/>
          : <MenuIcon onClick={() => setMenuShown(true)}/>
        }
        {menuShown && <SideMenu/>}
      </div>
    </div>
  )
}

const CrossIcon = ({onClick}) => <RiCloseLine color="white" size="27" onClick={onClick}/>
const MenuIcon = ({onClick}) => <RiMenu3Line color="white" size="27" onClick={onClick}/>

const SideMenu = () => (
  <div className={`${styles.menu__container} scale-up-center`}>
    <div>
      <Menu/>
      <div className={styles.menu__sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  </div>
)

// noinspection HtmlUnknownAnchorTarget
const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Logo = () => (
  <div className={styles.logo}>
    <img src={logo} alt='logo'/>
  </div>
)

const Links = () => (
  <div className={styles.links__container}>
    <Menu/>
  </div>
)

export default Navbar