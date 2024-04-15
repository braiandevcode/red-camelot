const SlideShow = ({ children, r_ref }) => {
    return (
        <>
            <div className="w-full flex gap-6" ref={r_ref}>
                {children}
            </div>
        </>
    )
}

export default SlideShow