import Button from "../Button"

interface Route {
    path: string;
    name: string;
}

function Header() {
    const navbarRoutes: Route[] = [
        { path: '/contact', name: 'Contact' },
        { path: '/portfolio', name: 'Portfolio' },
        { path: '/resume', name: 'Resume' },
        { path: '/', name: 'About' }
    ];

    return (
        <div className={"header-container"}>
            <div className={"navbarRoutes-container"}>
                {
                    navbarRoutes.map((route: Route) => (
                        <div className={"button-padding"}>
                            <Button routerPath={route.path}>{route.name}</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header