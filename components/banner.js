import { useEffect, useRef } from 'react'
const Banner= () => {
    const bannerRef = useRef(null)

    const atOptions = {
        key: '5f0f0e9389135fa749af872435322af8',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }
    useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
        const conf = document.createElement('iframe')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `window.atOptions = ${JSON.stringify(atOptions)}`

        bannerRef.current.appendChild(conf)
        bannerRef.current.appendChild(script)
    }
}, [])

    return <div ref={bannerRef}></div>
}

export default Banner;