import Header from "../Header"

/**
 * 
 * @param children 
 * @returns Layout defining the UI. Pages are wrapper by a 
 * common layout if appropriate.
 */
function Layout({children}: {children: any}) {

    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
            {/* Footer would go here.*/}
        </div>
    )
}

export default Layout