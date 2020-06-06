import React from 'react';
import { Box, CSSReset } from '@chakra-ui/core'

import HomeHeader from './homeHeader'
import HomeFooter from './homeFooter'

const HomeLayout = ({ children }) => (
    <Box>
        <HomeHeader />
        {children}
        <HomeFooter />
    </Box>
)
const EmptyLayout = ({ children }) => (
    <Box>
        {children}
    </Box>
)
export default ({ children }) => {
    // 根據不同的 path 使用不同的 layout
    return (
        <HomeLayout>
            <CSSReset />
            {children}
        </HomeLayout>
    )
}
