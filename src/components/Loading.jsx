const Loading = () => {
    return (
        <>
            <div className="container-loader flex flex-col justify-center gap-2">
                <div className="loader"></div>
                <h2 className="text-white font-extrabold text-2xl md-text-3xl">Cargando...</h2>
            </div>
        </>
    )
}

export default Loading