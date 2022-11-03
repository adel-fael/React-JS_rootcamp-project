import { yupResolver } from '@hookform/resolvers/yup'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import * as yup from 'yup'

import { motion, useAnimation } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'numbers are not allowed.')
    .required('name is required.'),
  email: yup
    .string()
    .email('e.g. example@email.com')
    .required('email is required.'),
})

const SignUp = () => {
  const [userInfo, setUserInfo] = useState( [

  ]
  )
  console.log(userInfo)

  const {
    register,
    handleSubmit,
    setValue,
    formState,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = (data) => {
    setUserInfo((prevData) => {
      return [
        ...prevData,
        { id:  userInfo?.length ? userInfo[userInfo.length - 1].id + 1 : 1,

          name: data.name, 
          email: data.email 
        },
      ]
    })
    // console.log(data)
    if (data) {
      //! set it in the server when its 200
      Swal.fire({
        icon: 'info',
        title: `Too late! ${data.name}`,
        text: 'Sorry... The event is over, you can know about us down below.',
        footer:
          'Check our <a class="text-blue-600 underline hover:text-blue200 px-2" target="_blank" href="https://www.linkedin.com/company/econcepts-me/">LinkedIn</a> page.',
      })
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setValue('name', '')
      setValue('email', '')
    }
  }, [formState])


  // framer-motion + react-intersection-observer
  const { ref: signUpRef, inView: signUpIsVisible } = useInView({
    threshold: 0.1,
  })
  const animation1 = useAnimation()

  useEffect(() => {
    // console.log('SignUp is in view: ', signUpIsVisible)

    if (signUpIsVisible) {
      animation1.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      })
    }
    if (!signUpIsVisible) {
      animation1.start({
        x: '-100vw',
      })
    }
  }, [signUpIsVisible])

  return (
    <div ref={signUpRef}>
      <motion.section
        animate={animation1}
        className="mt-[5rem] py-[2rem] flex justify-center bg-yellow200 max-w-[22rem] mx-auto rounded-xl mb-[3rem] lg:max-w-[30rem] z-50"
      >
        <form
          className="flex flex-col justify-center items-center gap-4 lg:px-[4rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-[2rem] text-blue200 font-bold line-through">Get Notified!</h2>
          <p className='line-through'>December 3rd - 4rth</p>
          <input
            {...register('name')}
            type="text"
            name="name"
            placeholder="name"
            className="w-full py-4 px-5 bg-white100 placeholder:font-medium rounded-2xl  focus:bg-white200 outline-0 hover:bg-white200 transition-colors text-base"
          />
          <p className="text-red100 self-start ml-5 text-sm font-bold">
            {errors?.name?.message}
          </p>
          <input
            {...register('email')}
            type="text"
            name="email"
            placeholder="email"
            className="w-full py-4 px-5 bg-white100 placeholder:font-medium rounded-2xl  focus:bg-white200 outline-0 hover:bg-white200 transition-colors text-base"
          />
          <p className="text-red100 self-start ml-5 text-sm font-bold">
            {errors?.email?.message}
          </p>
          <button
            type="submit"
            className="w-full rounded-2xl relative  px-5 py-2.5 overflow-hidden group bg-blue200 hover:bg-gradient-to-r hover:from-blue200 hover:to-blue-600 text-white   hover:ring-blue-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-64 ease"></span>
            <span className="relative">Button Text</span>
          </button>
          <div className="py-5 space-y-4">
            <a href="#" className=" flex gap-1 active:opacity-[0.6]">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                <circle cx="16.806" cy="7.207" r="1.078" />
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
              </svg>
              <span className="hover:translate-x-1 transition-transform">
                rootcamp
              </span>
            </a>
            <a
              href="#"
              // target="_blank"
              className="flex gap-1 active:opacity-[0.6]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="hover:translate-x-1 transition-transform">
                info@rootcamp.me
              </span>
            </a>
          </div>
        </form>
      </motion.section>
    </div>
  )
}

export default SignUp
