import moment from 'moment/moment'
import css from './Layout.module.css'
import {BiSearch} from 'react-icons/bi'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className={css.container}>
        <Sidebar />

        <div className={css.dashboard}>
            <div className={css.topBaseGradients}>
                <div className='gradient-red'></div>
                <div className='gradient-orange'></div>
                <div className='gradient-blue'></div>
            </div>

            <div className={css.header}>
                <span>{moment().format("dddd, Do MMM YYYY")}</span>

                <div className={css.searchBar}>
                    <BiSearch size={20} />
                    <input type="text" placeholder="Search" />
                </div>

                <div className={css.profile}>
                    <img src="./profile.png" alt="person image" />
                    <div className={css.details}>
                        <span>Denis Steven</span>
                        <span>devissteven@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout