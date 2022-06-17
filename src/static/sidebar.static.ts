import { ReactComponent as BrowserIcon } from '../assets/SVGs/Browse-Icons.svg'
import { ReactComponent as UserIcon } from '../assets/SVGs/Friends-Icons.svg'
import { ReactComponent as Notifications } from '../assets/SVGs/Notifications-Icons.svg'
import { ReactComponent as LogoutIcon } from '../assets/SVGs/Logout-icon.svg'
import { ReactComponent as NFTIcon } from '../assets/SVGs/NFT-icon.svg'
import { ReactComponent as DAOIcon } from '../assets/SVGs/DAO-icon.svg'
import { ReactComponent as AddIcon } from '../assets/SVGs/chat-icon.svg'


export const minterData = [
    {
        icon: BrowserIcon,
        name: 'DAO',
        link: '/',
    },
    {
        icon: UserIcon,
        name: 'Shareholders',
        link: '/mint-tokens',
    },
    {
        icon: Notifications,
        name: 'Notifications',
        link: '/',
    },
]

export const burnerData = [
    {
        icon: NFTIcon,
        name: 'Components',
        link: '/add-burner',
    },
    {
        icon: DAOIcon,
        name: 'DAO Voting',
        link: '/burn-tokens',
    },
    {
        icon: AddIcon,
        name: 'Add items',
        link: '/burn-tokens',
    }
]

export const settingsData = [
    {
        icon: LogoutIcon,
        name: 'Logout',
        link: '/',
    }
]