import { NextUIProvider } from '@nextui-org/react'

import Header from '../components/Header.jsx'

// eslint-disable-next-line react/prop-types
function MainLayout({children}) {
    return (
        <NextUIProvider>
            <Header></Header>
            <div>{children}</div>
            {/* <Footer></Footer> */}
        </NextUIProvider>
    )
}

export default MainLayout