import React from 'react';

const Button = () => {
    return (
        
        <div className="mb-5">
            <div className="flex w-full">
                <div className="flex w-1/2 items-center justify-center">
                    <button type="button" className="btn btn-primary">
                        Primary
                    </button>
                </div>
                <div className="flex w-1/2 items-center justify-center">
                    <button type="button" className="btn btn-outline-primary">
                        Primary
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Button;