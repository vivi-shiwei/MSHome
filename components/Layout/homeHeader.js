import React, { forwardRef } from 'react'
import {
    Box,
    Flex,
    Heading,
    ButtonGroup,
    Button,
    Menu,
    Avatar,
    Text,
    MenuGroup,
    MenuItem,
    MenuDivider,
    Stack
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { AiOutlineLogout, AiOutlineDashboard } from 'react-icons/ai'
import { IoMdPerson, IoMdSchool, IoMdSettings } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'

import Container from '../../components/container'

const Logo = () => (
    <Heading as='h1' size='lg' letterSpacing='-.1rem'>
        <Box as='span' d={{ base: 'none', sm: 'inline' }}>
            Macau School
      </Box>
        <Box as='span' d={{ base: 'inline', sm: 'none' }}>
            MS
      </Box>
        <Box as='span' color='blue.500' d={{ base: 'none', md: 'inline' }}>
            {' '}學不停
      </Box>
    </Heading>
)
const Header = props => {
    return (
        <Box
            pos='fixed'
            as='header'
            top='0'
            zIndex='4'
            bg="white"
            left='0'
            right='0'
            borderBottomWidth='1px'
            width='full'
            {...props}
        >
            <Container h='4rem' px={2}>
                <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' justify='space-between'>
                    <NextLink href='/' passHref>
                        <Box
                            as='a'
                            d='block'
                        >
                            <Logo />
                        </Box>
                    </NextLink>
                    <ButtonGroup spacing={{ base: 0, sm: 2, md: 8 }}>
                    </ButtonGroup>

                    <Stack align='center' isInline spacing='1'>
                        <MenuDivider />
                        <Box>
                            <NextLink href='/' passHref>
                                <Button as='a' bg='transparent' border='1px' px={2}>
                                    登入
                            </Button>
                            </NextLink>
                        </Box>
                    </Stack>
                </Flex>
            </Container >
        </Box >
    )
}

export default Header