import React from 'react';

const ScrollTopButton = () => {

        return (
            <div className="container mb-5 mt-5">
                <div className="row ">
                    <div className="scrolltop d-inline-flex p-2 ml-auto" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <i className="fa fa-angle-up" />
                    </div>
                </div>
            </div>
            
        );
    
}

export default ScrollTopButton;