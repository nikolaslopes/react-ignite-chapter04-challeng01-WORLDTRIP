import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swipper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

export function ContinentsSlider() {
  return (
    <Flex
      width={'100%'}
      maxWidth={'1300px'}
      marginX={'auto'}
      height={{ sm: '250px', md: '350px', lg: '450px' }}
      border={'1px solid red'}
    >
      <SwiperReact
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Flex
            width={'100%'}
            height={'100%'}
            backgroundImage={`url(https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80)`}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={'center'}
          >
            <VStack spacing={4}>
              <Heading
                color={'gray.100'}
                fontWeight={'700'}
                fontSize={{ base: 'xl', md: '3xl' }}
              >
                Europa
              </Heading>
              <Text
                color={'gray.200'}
                fontWeight={'700'}
                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
              >
                O continente mais antigo
              </Text>
            </VStack>
          </Flex>
        </SwiperSlide>
      </SwiperReact>
    </Flex>
  )
}
