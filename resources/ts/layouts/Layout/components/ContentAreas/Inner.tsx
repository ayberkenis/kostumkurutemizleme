
function InnerContent( { children } ) {
    return (
        <div className="w-full h-full bg-white rounded-b-lg py-10 px-12 pt-10">
            {children}
      </div>
    )
}

export { InnerContent }