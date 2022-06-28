import Link from 'next/link'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Flex, Heading, Text, useToast, VStack } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect } from 'react'
import { fetchContinents } from './services'

SwiperCore.use([A11y, Autoplay, Navigation, Pagination])

export function ContinentsSlider() {
  const toast = useToast()

  const getCountries = async () => {
    try {
      const response = await fetchContinents()

      return response
    } catch {
      {
        toast({
          title: 'Falha ao carregar dados',
          position: 'top-right',
          isClosable: true,
          colorScheme: 'red.500',
        })
      }
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <>
      <Flex
        width={'100%'}
        maxWidth={'1300px'}
        marginX={'auto'}
        height={['250px', '350px', '450px']}
      >
        <SwiperReact
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          a11y={{
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          }}
        >
          <SwiperSlide>
            {}
            <Link href={'/'}>
              <Flex
                width={'100%'}
                height={'100%'}
                backgroundImage={`url(https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80)`}
                backgroundRepeat={'no-repeat'}
                backgroundPosition={'center'}
                backgroundSize={'cover'}
                cursor={'pointer'}
              >
                <Flex
                  width={'100%'}
                  height={'100%'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  backgroundColor={'blur.900'}
                >
                  <VStack spacing={4}>
                    <Heading
                      color={'gray.100'}
                      fontWeight={'700'}
                      fontSize={['2xl', '3xl', '5xl']}
                    >
                      Europa
                    </Heading>
                    <Text
                      color={'gray.200'}
                      fontWeight={'700'}
                      fontSize={['sm', 'xl', '2xl']}
                    >
                      O continente mais antigo
                    </Text>
                  </VStack>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={'/'}>
              <Flex
                width={'100%'}
                height={'100%'}
                backgroundImage={`url(https://images.unsplash.com/photo-1504064860048-974c8788c612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80)`}
                backgroundRepeat={'no-repeat'}
                backgroundPosition={'center'}
                backgroundSize={'cover'}
                cursor={'pointer'}
              >
                <Flex
                  width={'100%'}
                  height={'100%'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  backgroundColor={'blur.900'}
                >
                  <VStack spacing={4}>
                    <Heading
                      color={'gray.100'}
                      fontWeight={'700'}
                      fontSize={['2xl', '3xl', '5xl']}
                    >
                      Europa
                    </Heading>
                    <Text
                      color={'gray.200'}
                      fontWeight={'700'}
                      fontSize={['sm', 'xl', '2xl']}
                    >
                      O continente mais antigo
                    </Text>
                  </VStack>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
        </SwiperReact>
      </Flex>
    </>
  )
}
