import React from 'react';
import ContentLoader from "react-content-loader";


function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="133" cy="110" r="105" />
            <rect x="-1" y="224" rx="6" ry="6" width="280" height="26" />
            <rect x="-1" y="257" rx="6" ry="6" width="280" height="84" />
            <rect x="1" y="354" rx="6" ry="6" width="92" height="31" />
            <rect x="133" y="348" rx="20" ry="20" width="146" height="44" />
        </ContentLoader>
    );
}

export default LoadingBlock
