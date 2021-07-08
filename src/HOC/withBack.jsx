import React from 'react';

const withBack = (WrapComponent) => {
    const newComponent = () => {
        return (
            <div style={{backgroundColor:"blue"}}>
                <WrapComponent />
            </div>
        )
    }
    return newComponent
}
export default withBack