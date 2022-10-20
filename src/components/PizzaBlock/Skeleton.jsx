import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={0}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="119" cy="103" r="100" />
        <rect x="0" y="231" rx="0" ry="0" width="206" height="0" />
        <rect x="14" y="215" rx="18" ry="18" width="224" height="29" />
        <rect x="15" y="257" rx="0" ry="0" width="224" height="45" />
        <rect x="15" y="314" rx="0" ry="0" width="85" height="32" />
        <rect x="145" y="314" rx="0" ry="0" width="93" height="32" />
        <rect x="293" y="427" rx="0" ry="0" width="5" height="4" />
    </ContentLoader>
)

export default Skeleton