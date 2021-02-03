export default function Folder(){
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.25em" height="1.25em">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
            </svg>
            <style jsx>{
                `svg{
                    fill: currentColor;
                    vertical-align: -0.25em;
                    margin-right: 0.25em;
                }`
            }</style>
        </>
        )
}