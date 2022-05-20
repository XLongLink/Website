import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceAddress } from "./redux/walletSlice";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { connector } from "../../walletConnect";
import Button from '@mui/material/Button';

import { MenuItem, Menu } from "@mui/material"
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

// icons
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';

/* 
    Walletconnect login button, show popup

    ! Algo pera wallet has a bug, made a bug report here
    https://github.com/perawallet/pera-wallet/issues/77

    has to be added che possibility to click outside the walletconnect popup to exit

*/

const Connect = (props: any) => {
    const { address: wallet } = useSelector((state: any) => state.wallet);
    const dispatch = useDispatch();

    // handle close on escape
    useEffect(() => {
        if (document == undefined) return
        const escFunction = (event: any) => {
            if (event.keyCode === 27) QRCodeModal.close();
        };
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    useEffect(() => {
        if (connector.connected && connector.accounts.length > 0) {
            dispatch(replaceAddress(connector.accounts[0]));
        }
    }, [dispatch]);

    const connectToMobileWallet = async () => {
        if (connector.connected) return;
        if (connector.pending) return QRCodeModal.open(connector.uri, () => { return });
        await connector.createSession()
    };

    const disconnectMobileWallet = async () => {
        setAnchorEl(null);
        if (!connector.connected) return;
        await connector.killSession();
    };

    // menù
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuId = 'primary-search-account-menu';

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            {!wallet ? (
                <Button
                    variant="text"
                    onClick={connectToMobileWallet}
                    {...props}
                >
                    Login
                </Button >
            ) : (
                <>
                    <IconButton
                        onClick={handleProfileMenuOpen}
                        size="small"
                        sx={{ ml: 2 }}
                        {...props}
                    >
                        <Avatar
                            sx={{ width: 40, height: 40 }}
                        />
                    </IconButton>
                </>
            )
            }
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
                id={menuId}
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
                <MenuItem>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    Dashboard
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={disconnectMobileWallet}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>

    )
};

export default Connect;