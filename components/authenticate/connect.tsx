import { useEffect, useState, useContext, createContext } from "react";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { connector } from "../../walletConnect";
import draftAuthTx from "./helpers/draftAuthTx";
import { disconnectMobileWallet } from "./redux/walletListeners"
//redux
import { useDispatch, useSelector } from "react-redux";
import { replaceAddress, replaceAuthToken } from "./redux/walletSlice";
import { useGetDashboardQuery } from "./redux/nextApi";
//mui
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// icons
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TokenIcon from '@mui/icons-material/Token';

const Context = createContext<any | null>(null)

function useStorage(key: string, defaultValue: any = false) {

    const [value, setValue] = useState(null)

    // call this mento update value
    const updateValue = (newValue: any) => {
        if (typeof window === 'undefined') return
        setValue(newValue)
        console.log(newValue)
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    /*
        set default value, if given otherwise load from localstorage
    */
    useEffect(() => {
        if (defaultValue || defaultValue == null) {
            updateValue(defaultValue)
            return
        }
        updateValue(window.localStorage.getItem(key));
        console.log(value)
    }, [])

    return [value, updateValue];
}

/* 
    Walletconnect login button, show popup

    ! Algo pera wallet has a bug, made a bug report here
    https://github.com/perawallet/pera-wallet/issues/77

    has to be added che possibility to click outside the walletconnect popup to exit

*/

/* 
    Handle authentication button
    props: 
        - 
*/
const Authenticate = () => {
    const { token, setToken } = useContext(Context);
    const { address: wallet, iOS } = useSelector((state: any) => state.wallet);
    const { refetch } = useGetDashboardQuery(wallet, { skip: !wallet });
    const dispatch = useDispatch();

    const auth = async () => {
        window.location.href = iOS ? `algorand-wc://` : `algorand://`;
        try {
            const t = await draftAuthTx(wallet)
            if (t != null) {
                dispatch(replaceAuthToken(t))
                setToken(t)
            }
        } catch (e: any) {
            console.log(e)
        }
        refetch()
    }

    return (
        <>
            <Button
                variant="text"
                onClick={auth}
                sx={{ my: 2, color: 'white', display: 'flex' }}
            >
                Authenticate
            </Button >
        </>
    );
}

/*
    Handle login button
*/

const Login = () => {
    const dispatch = useDispatch();

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
        if (connector.pending) {
            return QRCodeModal.open(connector.uri, () => {
            });
        }
        await connector.createSession()
    }

    return (
        <Button
            variant="text"
            onClick={connectToMobileWallet}
            sx={{ my: 2, color: 'white', display: 'flex' }}
        >
            Login
        </Button >
    )
}

/*
    Popup menu
        anchorEl get passed with context
*/
const PopUpMenu = (props: any) => {
    const { anchorEl, token } = useContext(Context);
    const isMenuOpen = Boolean(anchorEl);

    const handleDisconnect = () => {
        disconnectMobileWallet()
        props.anchorEl(false)
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

/*
    Handle connect box

*/
const Connect = () => {
    // menu ancora
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const { address: wallet } = useSelector((state: any) => state.wallet);

    const [token, setToken] = useStorage("auth", null)

    /*
        !wallet -> se non c'è wallet metti login
    */
    return (
        <Context.Provider value={{ anchorEl: anchorEl, token: token, setToken: setToken }}>
            {!wallet ? (<Login />) : (<></>)}
            {wallet && !token ? (<Authenticate />) : (<></>)}
            {wallet && token ? (
                <IconButton
                    onClick={handleProfileMenuOpen}
                    size="small"
                    sx={{ ml: 2 }}
                >
                    <Avatar
                        sx={{ width: 40, height: 40 }}
                    />
                </IconButton>) : (<></>)}
            <PopUpMenu anchorEl={setAnchorEl} />
        </Context.Provider>
    )
};

export default Connect;