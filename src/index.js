import { withTheme } from 'emotion-theming'
import {
  Box,
  Heading,
  Button,
  Divider,
  Text,
  Flex,
  Grid
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { MdAccessibility, MdPhoto, MdShowChart } from 'react-icons/md'

import withApollo from 'lib/withApollo'
import userCurrentUserState from 'lib/useCurrentUserState'
import getRootUrl from 'lib/getRootUrl'

import Layout from 'components/layout'
import Container from 'components/container'

const rootUrl = getRootUrl()

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <Box {...props}>
      <Flex
        rounded='full'
        size={12}
        bg='blue.500'
        align='center'
        justify='center'
      >
        <Box size={6} color='white' as={icon} />
      </Flex>
      <Heading as='h2' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
  )
}

const School = () => {
  const { currentUser } = userCurrentUserState()

  return (
    <Layout>
      <Box as='section' pt={40} pb={24}>
        <Container>
          <Box maxW='xl' mx='auto' textAlign='center'>
            <Heading as='h1' size='xl' fontWeight='semibold'>
              我的學校
              <Box as='span' color='blue.500'>
                {' '}
                SCHOOL
              </Box>
            </Heading>

            <Text opacity='0.7' fontSize='xl' mt='6'>
              SCHOOL 是一個簡單的、可連結很多模組的、線上的學校系統。可透過 SCHOOL 進行日常校園管理，了解學生學習生活，促進發掘學生閃光點等等。專為澳門中小幼學校而設。
            </Text>

            <Box mt='6' d='flex' flexWrap='wrap' justifyContent='center'>
              {!currentUser && (
                <>
                  <NextLink
                    passHref
                    href={{
                      pathname: '/school/login',
                      query: {
                        r: rootUrl + '/school/launch'
                      }
                    }}
                  >
                    <Button size='lg' as='a' variantColor='blue' w={{ base: '100%', sm: 'auto' }}>
                      登入到我的學校
                    </Button>
                  </NextLink>
                  {/* <NextLink
                    passHref
                    href={{
                      pathname: '/login',
                      query: {
                        r: rootUrl + '/new/school'
                      }
                    }}
                  >
                    <Button size='lg' as='a' w={{ base: '100%', sm: 'auto' }} ml={{ base: 0, sm: 4 }} mt={{ base: 2, sm: 0 }}>
                      新學校註冊
                    </Button>
                  </NextLink> */}
                </>
              )}
              {!!currentUser && (
                <>
                  <NextLink href='/school/launch' passHref>
                    <Button size='lg' as='a' variantColor='blue' w={{ base: '100%', sm: 'auto' }}>
                      進入到我的學校
                    </Button>
                  </NextLink>
                  {/* <NextLink href='/new/school' passHref>
                    <Button size='lg' as='a' w={{ base: '100%', sm: 'auto' }} ml={{ base: 0, sm: 4 }} mt={{ base: 2, sm: 0 }}>
                      新學校註冊
                    </Button>
                  </NextLink> */}
                </>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider my={16} />

      <Container>
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={10}
          px={{ md: 12 }}
        >
          <Feature icon={MdAccessibility} title='學生成長檔案'>
            SCHOOL 替每個學生都建立一個成長檔案，老師能記錄學生的學習生活，如學生的擅好，長處等。
            使老師更能發現學生的閃光點。同學也能充分了解校園生活所帶給他的歷程。
          </Feature>
          <Feature icon={MdPhoto} title='學生相冊'>
            每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。
          </Feature>
          <Feature icon={MdShowChart} title='與基力掛勾的學生評估表'>
            以基本學力要求掛勾的評估系統。更能讓家長和學生知道學校所教的內容與已達成的個人能力之間的闗係。學生更能清楚自己已掌握和未熟練的內容是什麼。
          </Feature>
        </Grid>
      </Container>
    </Layout>
  )
}

export default withTheme(withApollo(School))
