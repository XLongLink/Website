import { useContext } from "react";
import { Storage } from "../../customHooks/useStorage";
import { Context } from "./connect";
import { disconnectMobileWallet } from "./redux/walletListeners"
//mui
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// icons
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TokenIcon from '@mui/icons-material/Token';

const PopUpMenu = (props: any) => {
    const { token, setToken } = useContext(Storage)
    const { anchorEl } = useContext(Context);
    const isMenuOpen = Boolean(anchorEl);

    const handleDisconnect = () => {
        disconnectMobileWallet()
        props.anchorEl(false)
        setToken(null)
    }

    const handleMenuClose = () => {
        props.anchorEl(null)
    };

    const showToken = () => {
        console.log(token)
    }

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} /* Handle position  */
            transformOrigin={{ vertical: 'top', horizontal: 'right' }} /* Handle direction  */
            PaperProps={{ /* Show small arrow  */
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1,
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    }
                }
            }}
            id={'primary-search-account-menu'}
            keepMounted
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                <ListItemIcon>
                    <Avatar sx={{ width: 20, height: 20 }} />
                </ListItemIcon>
                Profile
            </MenuItem>
            <MenuItem
                component="a"
                href='/dashboard'
            >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                Dashboard
            </MenuItem>
            <MenuItem onClick={showToken}>
                <ListItemIcon>
                    <TokenIcon />
                </ListItemIcon>
                Token
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleDisconnect}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    )
}

export default PopUpMenu