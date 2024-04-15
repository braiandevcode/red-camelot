const Buttons = ({clase,onClick, children }) => {
    return (
        <>
            <button
                className={clase}
                onClick={onClick}
            >
            {children}
            </button>
        </>
    )
}

export default Buttons