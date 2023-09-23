import { NextUIProvider } from '@nextui-org/react'

import Header from '../components/HeaderSesion'
import Footer from '../components/Footer.jsx'

// eslint-disable-next-line react/prop-types
function MainLayoutInfo({children}) {
    return (
        <NextUIProvider>
            <Header></Header>
            <>{children}</>
            <Footer></Footer>
        </NextUIProvider>
    )
}

export default MainLayoutInfo