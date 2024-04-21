import React, {createContext, useContext,useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) =>{

    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)
    const [currentColor, setcurrentColor] = useState("#03C9D7")
    const [currentMode, setcurrentMode] = useState('Light')
    const [themeSettings, setthemeSettings] = useState(false)
    const setMode = (e) =>{
        setcurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setthemeSettings(false)
    }

    const setColor = (color) => {
      setcurrentColor(color);
      localStorage.setItem("colorMode", color);
      setthemeSettings(false)
    };

    const handleClick = (clicked) =>{
        setisClicked({ ...initialState, [clicked]: true});
    }
    return(
        <StateContext.Provider value = {{activeMenu, setactiveMenu, isClicked , setisClicked, handleClick, setscreenSize, screenSize, currentColor, setColor, currentMode, setMode, themeSettings, setthemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);