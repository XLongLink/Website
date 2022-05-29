const styleToString = (style: any) => {
    return Object.keys(style).reduce((acc, key) => (
        acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
    ), '');
};

const BodyStyle = (parms: any) => {
    return (
        <style jsx global>
            {
                `body {
                ${styleToString(parms)}
             }`
            }
        </style>)
}

export default BodyStyle