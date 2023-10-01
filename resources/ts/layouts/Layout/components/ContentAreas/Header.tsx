
function HeaderBig({pageTitle, pageDescription}) {
    return (
        <div className="header py-8 text-center pb-2 font-semibold tracking-wider text-gray-800 bg-white w-full border-b border-opacity-10 mb-4 border-black rounded-sm">
        <h1 className="font-poppins font-bold text-2xl text-gray-800">{pageTitle}</h1>
        <p className="text-gray-800 text-sm font-medium py-4 w-1/2 mx-auto"> 
        {pageDescription}
        </p>
      </div>
    )
}

export {HeaderBig};