import { createContext, useState } from "react"


type CursorContextType = {
    onHover: boolean,
    handleHoverOn: () => void,
    handleHoverOff: () => void,
}

export const CursorContext = createContext<CursorContextType | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
    const [onHover, setHover] = useState(false)

    // handler
    const handleHoverOn = () => {
        setHover(true);
    }

    const handleHoverOff = () => {
        setHover(false);
    }
    return (
        <CursorContext.Provider value={{onHover, handleHoverOn, handleHoverOff}}>
            {children}
        </CursorContext.Provider>
    )
}


export default CursorProvider;