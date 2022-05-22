import { useState, createContext, useContext } from "react"
import { useSelector } from "react-redux"
import Login from "./login"
import Authenticate from "./authenticate"
import PopUpMenu from "./popUpMenu"
import { Storage } from "../../customHooks/useStorage"

//mui
import IconButton from '@mui/material/IconButton';
// icons
import Avatar from '@mui/material/Avatar';
// 

export const Context = createContext<any | null>(null)
/* 
    Walletconnect login button, show popup

    ! Algo pera wallet has a bug, made a bug report here
    https://github.com/perawallet/pera-wallet/issues/77

    has to be added che possibility to click outside the walletconnect popup to exit

*/

const Connect = () => {
    // ancora menù, va sistemato
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const { address: wallet } = useSelector((state: any) => state.wallet);

    const { token } = useContext(Storage)


    /*
        !wallet -> se non c'è wallet metti login
    */
    return (
        <Context.Provider value={{ anchorEl: anchorEl }}>
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