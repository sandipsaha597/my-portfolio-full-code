import React, {useEffect} from 'react'
// import {gsap} from 'gsap'

function Page3() {
    // let trsDuration = 1
    // useEffect(() => {
    //     gsap.from('.line', {
    //     duration: trsDuration,
    //     opacity: 0,
    //     x: -40,
    //     stagger: .4
    //     })
    // }, [])
    useEffect(() => {
        document.title = 'Page 3 | Developer Sandip'
    }, [])
    return (
        <div className="page3">
            <h1 className='line'>Page3</h1>
            <p className='line'>Lorem ipsum dolor. Vitae ad velit quam ex quia unde ipsum, vero maiores maxime, reiciendis nesciunt dolorum atque! Earum, molestias commodi eligendi, repellat aut id molestiae laborum officiis nulla modi deleniti soluta dolores odio blanditiis.</p>
        </div>
    )
}

export default Page3
