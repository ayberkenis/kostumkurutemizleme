function GridItem ({ title, children, flexPos = "flex-col" }) {
    return (
        <div className={"p-4 w-full h-full flex justify-center items-start border border-black border-opacity-10 " + flexPos}>
            <h2 className="font-poppins font-medium">{title}</h2>

        {children}
        </div>
    )
}

export default GridItem;