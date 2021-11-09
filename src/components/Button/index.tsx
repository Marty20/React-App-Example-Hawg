import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

function Button({ children, onClick, routerPath, value }) {
    const navigate = useNavigate();

    const handleClick = (event: any) => {

        if (routerPath) return navigate(routerPath)

        onClick && onClick({ event, value })
    }

    const renderChildren = () => {
        if (children) return children;

        return;
    }

    return (
        <div className={"button-class"} onClick={handleClick}>
            {renderChildren()}
        </div>
    )
}

// Helps with development/defining
Button.defaultProps = {
    routerPath: '',
    value: {},
    onClick: () => { }
}

// Helps with development/defining
Button.propTypes = {
    children: PropTypes.any,
    routerPath: PropTypes.string,
    value: PropTypes.any,
    onClick: PropTypes.any,
}

export default Button

