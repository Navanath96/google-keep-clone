import React from "react";

function Header(){
    const logo=<img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
    alt=""/>
    return(
        <div className="header">
            {logo}
            <h3>Keep</h3>
        </div>
    )
}

export default Header;