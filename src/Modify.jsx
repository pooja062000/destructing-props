
const Modify = (props) => {

    let {myname, better,text} = props
    return(
        <>
        <div className="eyes-main-col">
            <div className="eye-image"></div>

            <h2>{myname}</h2>
            <h6 className="text">{better}</h6>
            <div className="main-text">{text}</div>

            
            <div className="social_icon2">
            <div className="social">
                    
            <a href="https://www.facebook.com/poojaggarwal2000" target="blank"><i class="fa fa-facebook"></i></a>
                </div>
                <div className="social2">
                <a href="https://github.com/pooja062000?tab=repositories" target="blank"><i class="fa fa-github"></i></a>
                </div>
                <div className="social3">
                <a href="https://www.linkedin.com/in/pooja-aggarwal-987366255/" target="blank"><i class="fa fa-linkedin"></i></a>
                </div>
                
                <div className="social4">
                <i class="fa fa-behance"></i>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Modify