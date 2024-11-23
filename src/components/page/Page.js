import "./Page.css"

const Page = ({frontIndex, backIndex, onFlip}) => {

    var flipped = false;
    
    const renderFrontPage = () => {
        return (<div className="front" style={{zIndex: frontIndex}}>
            Front {frontIndex}
        </div>);
    }
    const renderBackPage = () => {
        return (<div className="back" style={{zIndex: backIndex}}>
            Back {backIndex}
        </div>);
    }

    const flipPage = () => {
        flipped = flipped ^ true
    }

    return ( //how to check if is animated
        <div className={flipped ? "flipped": ""}>
            {renderFrontPage()}
            {renderBackPage()}
        </div>
    );
}

export default Page;