import { useEffect } from 'react'
import SignUp from '../components/SignUp'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const animation222 = {
  initial: { y: '50vh' },
  animate: { y: 0 },
}
const animation3 = {
  initial: { y: '-50vh' },
  animate: { y: 0 },
  exit: { y: '-50vh' },
}

const titleAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
const topicItems = {
  initial: { x: '100vw' },
  animate: { x: 0 },
}

function RootCamp() {
  // framer-motion + react-intersection-observer
  const { ref: svg1Ref, inView: svg1UpIsVisible } = useInView()
  const animation2 = useAnimation()

  const { ref: svg11Ref, inView: svg11UpIsVisible } = useInView()
  const animation22 = useAnimation()

  useEffect(() => {
    // svg guy tablet
    if (svg1UpIsVisible) {
      animation2.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 0.6,
          bounce: 0.1,
        },
      })
    }
    if (!svg1UpIsVisible) {
      animation2.start({
        x: '100vw',
      })
    }
    // svg guy mobile
    if (svg11UpIsVisible) {
      animation22.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 0.6,
          bounce: 0.1,
        },
      })
    }
    if (!svg11UpIsVisible) {
      animation22.start({
        x: '100vw',
      })
    }
  }, [svg1UpIsVisible, svg11UpIsVisible])

  return (
    <AnimatePresence>
      <main className="overflow-x-hidden">
        <motion.div
          variants={animation3}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ ease: 'easeIn', duration: 0.6 }}
          className="flex justify-center sm:justify-start sm:pl-[5rem]"
        >
          <img className="w-[250px] p-2 mt-8" src="./rootcamplogo.svg" alt="" />
        </motion.div>

        <section className="lg:flex flex-row-reverse justify-center md:gap-[10rem] lg2:gap-[22rem]">
          <article className="flex flex-col items-center mt-[4rem]  ">
            <motion.h1
              variants={titleAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="font-bold text-[2rem] text-white200"
            >
              Think Deep Act Smart.
            </motion.h1>

            <motion.ul
              variants={topicItems}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ staggerChildren: 0.2, duration: 0.3 }}
              className=" mt-8 ml-[6rem] space-y-4"
            >
              <motion.li
                variants={topicItems}
     
                className="rtl text-[1.5rem]"
              >
                DevOps
              </motion.li>
              <motion.li variants={topicItems} className="rtl text-[1.5rem]">
                CyberSecurity
              </motion.li>
              <motion.li variants={topicItems} className="rtl text-[1.5rem]">
                Machine Learning
              </motion.li>
              <motion.li variants={topicItems} className="rtl text-[1.5rem]">
                BlockChain
              </motion.li>
              <motion.li variants={topicItems} className="rtl text-[1.5rem]">
                WorkFlow
              </motion.li>
              <motion.li variants={topicItems} className="rtl text-[1.5rem]">
                Cloud Computing
              </motion.li>
            </motion.ul>
          </article>

          <article className="animate__backInLeft">
            <SignUp />
          </article>
        </section>

        {/* yellow blob */}
        <div className="absolute top-0  -z-20 right-0 ">
          <svg
            width="484"
            height="160"
            viewBox="0 0 484 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="blob02"
              d="M593 -3.1131C593 110.658 323.5 96 229.855 150C92 201.5 50.5 29 0 -56C0 -169.771 102.909 -262 229.855 -262C356.8 -262 593 -116.884 593 -3.1131Z"
              fill="#F2BA52"
              fillOpacity="0.5"
            />
          </svg>
        </div>

        {/* blue blob */}
        <div className="hidden  lg:block lg:absolute lg:bottom-0  lg:left-0 lg:w-[6rem] -z-10">
          <svg
            width="89"
            height="227"
            viewBox="0 0 89 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="blob01"
              d="M71.0202 69.4391C71.0202 174.679 172.483 262.386 -106.646 461C-181.952 461 -243 375.686 -243 270.446C-243 165.206 -181.952 79.8925 -106.646 79.8925C-31.3403 79.8925 46.6178 -92.6798 71.0202 69.4391Z"
              fill="#4957A6"
              fillOpacity="0.5"
            />
          </svg>
        </div>

        {/* desktop */}
        <motion.div
          variants={animation222}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ ease: 'easeIn', duration: 0.6 }}
          className="hidden customZindex lg:block lg:absolute lg:bottom-0 lg:mx-auto lg:right-0 lg:left-0 lg:w-[50rem]"
        >
          <svg
            width="812"
            height="454"
            viewBox="0 0 812 454"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bottomDrawing">
              <g id="drawing">
                <circle
                  id="backgroundball"
                  cx="392.5"
                  cy="419.5"
                  r="392.5"
                  fill="#F2F2F2"
                  fillOpacity="0.77"
                />
                <path
                  id="Arc"
                  d="M809.5 426.5C809.5 641.858 632.462 816.5 414 816.5C195.538 816.5 18.5 641.858 18.5 426.5C18.5 211.142 195.538 36.5 414 36.5C632.462 36.5 809.5 211.142 809.5 426.5Z"
                  stroke="#62ABD9"
                  strokeWidth="5"
                />
                <g id="gear" clipPath="url(#clip0_22_59)">
                  <path
                    id="Vector"
                    d="M461.008 418.76H422.992L412.432 386.376C405.392 384.264 398.352 381.448 392.016 377.928L361.04 393.416L334.288 366.664L349.776 335.688C346.256 329.352 343.44 322.312 341.328 315.272L308.24 304.008V265.992L340.624 255.432C342.736 248.392 345.552 241.352 349.072 235.016L333.584 204.04L360.336 177.288L391.312 192.776C397.648 189.256 404.688 186.44 411.728 184.328L422.992 151.24H461.008L471.568 183.624C478.608 185.736 485.648 188.552 491.984 192.072L522.96 176.584L549.712 203.336L534.224 234.312C537.744 240.648 540.56 247.688 542.672 254.728L575.056 265.288V303.304L542.672 313.864C540.56 320.904 537.744 327.944 534.224 334.28L549.712 365.256L522.96 392.008L491.984 376.52C485.648 380.04 478.608 382.856 471.568 384.968L461.008 418.76ZM432.848 404.68H451.152L461.008 374.408L464.528 373.704C472.976 371.592 480.72 368.072 488.464 363.848L491.984 361.736L520.144 375.816L532.816 363.144L518.736 334.984L520.848 331.464C525.072 324.424 528.592 315.976 530.704 307.528L531.408 304.008L561.68 294.152V275.848L531.408 265.992L530.704 262.472C528.592 254.024 525.072 246.28 520.848 238.536L518.736 235.016L532.816 206.856L520.144 194.184L491.984 208.264L488.464 206.152C480.72 201.928 472.976 198.408 464.528 196.296L461.008 195.592L451.152 165.32H432.848L422.992 195.592L419.472 196.296C411.024 198.408 403.28 201.928 395.536 206.152L392.016 208.264L363.856 194.184L351.184 206.856L365.264 235.016L363.152 238.536C358.928 245.576 355.408 254.024 353.296 262.472L352.592 265.992L322.32 275.848V294.152L352.592 304.008L353.296 307.528C355.408 315.976 358.928 323.72 363.152 331.464L365.264 334.984L351.184 363.144L363.856 375.816L392.016 361.736L395.536 363.848C403.28 368.072 411.024 371.592 419.472 373.704L422.992 374.408L432.848 404.68Z"
                    fill="#5D84C4"
                    fillOpacity="0.8"
                  />
                  <rect
                    id="bg"
                    x="366"
                    y="344"
                    width="152"
                    height="184"
                    rx="33"
                    fill="#E0E7E7"
                  />
                </g>
                <g id="person">
                  <path
                    id="Vector 3"
                    d="M367 454V378C367 358.67 382.67 343 402 343H482C501.33 343 517 358.67 517 378V454"
                    stroke="#F24141"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector 4"
                    d="M397 454L397 399"
                    stroke="#F24141"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector 5"
                    d="M483 454L483 399"
                    stroke="#F24141"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle
                    id="Ellipse 1"
                    cx="442"
                    cy="285"
                    r="55.5"
                    stroke="#F24141"
                    strokeWidth="5"
                  />
                  <circle
                    id="Ellipse 2"
                    cx="442"
                    cy="285"
                    r="38.5"
                    stroke="#F24141"
                    strokeWidth="5"
                  />
                </g>
              </g>
              <g id="Balls">
                <ellipse
                  id="redBall"
                  cx="685.5"
                  cy="162"
                  rx="44.5"
                  ry="43"
                  fill="#F24141"
                />
                <circle
                  id="yellowBall"
                  cx="610.5"
                  cy="74.5"
                  r="74.5"
                  fill="#E0A54E"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_22_59">
                <rect
                  width="352"
                  height="352"
                  fill="white"
                  transform="translate(266 109)"
                />
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        {/* tablet */}
        <div ref={svg1Ref}>
          <motion.div
            animate={animation2}
            className="hidden md:flex md:justify-center lg:hidden"
          >
            <svg
              width="673"
              height="384"
              viewBox="0 0 673 384"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bottomDrawing">
                <g id="drawing">
                  <circle
                    id="backgroundball"
                    cx="325.311"
                    cy="347.689"
                    r="325.311"
                    fill="#F2F2F2"
                    fillOpacity="0.77"
                  />
                  <path
                    id="Arc"
                    d="M670.5 353.491C670.5 531.742 523.964 676.302 343.13 676.302C162.296 676.302 15.7607 531.742 15.7607 353.491C15.7607 175.24 162.296 30.6798 343.13 30.6798C523.964 30.6798 670.5 175.24 670.5 353.491Z"
                    stroke="#62ABD9"
                    strokeWidth="5"
                  />
                  <g id="gear" clipPath="url(#clip0_23_61)">
                    <path
                      id="Vector"
                      d="M382.091 347.076H350.583L341.831 320.235C335.996 318.485 330.161 316.151 324.91 313.233L299.236 326.07L277.064 303.898L289.9 278.224C286.983 272.973 284.649 267.138 282.899 261.303L255.475 251.967V220.459L282.315 211.707C284.066 205.872 286.399 200.037 289.317 194.785L276.48 169.112L298.653 146.94L324.326 159.776C329.578 156.859 335.412 154.525 341.247 152.774L350.583 125.35H382.091L390.844 152.191C396.679 153.941 402.513 156.275 407.765 159.193L433.438 146.356L455.611 168.529L442.774 194.202C445.692 199.453 448.026 205.288 449.776 211.123L476.616 219.875V251.384L449.776 260.136C448.026 265.971 445.692 271.806 442.774 277.057L455.611 302.731L433.438 324.903L407.765 312.066C402.513 314.984 396.679 317.318 390.844 319.068L382.091 347.076ZM358.752 335.406H373.923L382.091 310.316L385.009 309.733C392.011 307.982 398.429 305.065 404.847 301.564L407.765 299.813L431.104 311.483L441.607 300.98L429.937 277.641L431.688 274.723C435.189 268.888 438.106 261.887 439.857 254.885L440.44 251.967L465.53 243.798V228.628L440.44 220.459L439.857 217.541C438.106 210.54 435.189 204.121 431.688 197.703L429.937 194.785L441.607 171.446L431.104 160.943L407.765 172.613L404.847 170.862C398.429 167.362 392.011 164.444 385.009 162.694L382.091 162.11L373.923 137.02H358.752L350.583 162.11L347.666 162.694C340.664 164.444 334.245 167.362 327.827 170.862L324.91 172.613L301.57 160.943L291.067 171.446L302.737 194.785L300.987 197.703C297.486 203.538 294.568 210.54 292.818 217.541L292.234 220.459L267.144 228.628V243.798L292.234 251.967L292.818 254.885C294.568 261.887 297.486 268.305 300.987 274.723L302.737 277.641L291.067 300.98L301.57 311.483L324.91 299.813L327.827 301.564C334.245 305.065 340.664 307.982 347.666 309.733L350.583 310.316L358.752 335.406Z"
                      fill="#5D84C4"
                      fillOpacity="0.8"
                    />
                    <rect
                      id="bg"
                      x="303.348"
                      y="285.113"
                      width="125.98"
                      height="152.502"
                      rx="33"
                      fill="#E0E7E7"
                    />
                  </g>
                  <g id="person">
                    <path
                      id="Vector 3"
                      d="M304.177 376.283V319.285C304.177 299.955 319.847 284.285 339.177 284.285H393.499C412.829 284.285 428.499 299.955 428.499 319.285V376.283"
                      stroke="#F24141"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      id="Vector 4"
                      d="M329.041 376.283L329.041 330.698"
                      stroke="#F24141"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      id="Vector 5"
                      d="M400.319 376.283L400.319 330.698"
                      stroke="#F24141"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <circle
                      id="Ellipse 1"
                      cx="366.338"
                      cy="236.213"
                      r="45.5714"
                      stroke="#F24141"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 2"
                      cx="366.338"
                      cy="236.213"
                      r="31.4815"
                      stroke="#F24141"
                      strokeWidth="5"
                    />
                  </g>
                </g>
                <g id="Balls">
                  <ellipse
                    id="redBall"
                    cx="568.154"
                    cy="134.268"
                    rx="36.8824"
                    ry="35.6392"
                    fill="#F24141"
                  />
                  <circle
                    id="yellowBall"
                    cx="505.993"
                    cy="61.7469"
                    r="61.7469"
                    fill="#E0A54E"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_23_61">
                  <rect
                    width="291.744"
                    height="291.744"
                    fill="white"
                    transform="translate(220.466 90.3412)"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* mobile */}
        <div ref={svg11Ref}>
          <motion.div
            animate={animation2}
            className="flex justify-center md:hidden"
          >
            <svg
              width="400"
              height="240"
              viewBox="0 0 537 303"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bottomDrawing">
                <g id="drawing">
                  <circle
                    id="backgroundball"
                    cx="259.27"
                    cy="277.106"
                    r="259.27"
                    fill="#F2F2F2"
                    fillOpacity="0.77"
                  />
                  <path
                    id="Arc"
                    d="M533.875 281.73C533.875 423.507 417.322 538.5 273.472 538.5C129.622 538.5 13.0684 423.507 13.0684 281.73C13.0684 139.952 129.622 24.9592 273.472 24.9592C417.322 24.9592 533.875 139.952 533.875 281.73Z"
                    stroke="#62ABD9"
                    strokeWidth="5"
                  />
                  <g id="gear" clipPath="url(#clip0_23_78)">
                    <path
                      id="Vector"
                      d="M304.525 276.617H279.413L272.438 255.225C267.787 253.83 263.137 251.97 258.952 249.645L238.49 259.875L220.819 242.204L231.049 221.743C228.724 217.557 226.864 212.907 225.469 208.257L203.612 200.816V175.704L225.004 168.729C226.399 164.078 228.259 159.428 230.584 155.243L220.354 134.781L238.025 117.11L258.486 127.34C262.672 125.015 267.322 123.155 271.973 121.76L279.413 99.9033H304.525L311.501 121.295C316.151 122.69 320.801 124.55 324.987 126.875L345.448 116.645L363.119 134.316L352.889 154.777C355.214 158.963 357.074 163.613 358.469 168.264L379.861 175.239V200.351L358.469 207.326C357.074 211.977 355.214 216.627 352.889 220.813L363.119 241.274L345.448 258.945L324.987 248.715C320.801 251.04 316.151 252.9 311.501 254.295L304.525 276.617ZM285.924 267.316H298.014L304.525 247.32L306.85 246.854C312.431 245.459 317.546 243.134 322.661 240.344L324.987 238.949L343.588 248.25L351.959 239.879L342.658 221.278L344.053 218.952C346.843 214.302 349.168 208.722 350.563 203.141L351.029 200.816L371.025 194.305V182.215L351.029 175.704L350.563 173.379C349.168 167.798 346.843 162.683 344.053 157.568L342.658 155.243L351.959 136.641L343.588 128.27L324.987 137.571L322.661 136.176C317.546 133.386 312.431 131.061 306.85 129.666L304.525 129.201L298.014 109.204H285.924L279.413 129.201L277.088 129.666C271.507 131.061 266.392 133.386 261.277 136.176L258.952 137.571L240.35 128.27L231.979 136.641L241.28 155.243L239.885 157.568C237.095 162.218 234.77 167.798 233.375 173.379L232.91 175.704L212.913 182.215V194.305L232.91 200.816L233.375 203.141C234.77 208.722 237.095 213.837 239.885 218.952L241.28 221.278L231.979 239.879L240.35 248.25L258.952 238.949L261.277 240.344C266.392 243.134 271.507 245.459 277.088 246.854L279.413 247.32L285.924 267.316Z"
                      fill="#5D84C4"
                      fillOpacity="0.8"
                    />
                    <rect
                      id="bg"
                      x="241.767"
                      y="227.233"
                      width="100.405"
                      height="121.543"
                      rx="33"
                      fill="#E0E7E7"
                    />
                  </g>
                  <g id="person">
                    <path
                      id="Vector 3"
                      d="M242.427 299.895V261.573C242.427 242.243 258.097 226.573 277.427 226.573H306.511C325.841 226.573 341.511 242.243 341.511 261.573V299.895"
                      stroke="#F24141"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      id="Vector 4"
                      d="M262.244 299.895L262.244 263.564"
                      stroke="#F24141"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      id="Vector 5"
                      d="M319.052 299.895L319.052 263.564"
                      stroke="#F24141"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <circle
                      id="Ellipse 1"
                      cx="291.968"
                      cy="188.26"
                      r="35.8126"
                      stroke="#F24141"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 2"
                      cx="291.969"
                      cy="188.26"
                      r="24.583"
                      stroke="#F24141"
                      strokeWidth="5"
                    />
                  </g>
                </g>
                <g id="Balls">
                  <ellipse
                    id="redBall"
                    cx="452.814"
                    cy="107.011"
                    rx="29.395"
                    ry="28.4042"
                    fill="#F24141"
                  />
                  <circle
                    id="yellowBall"
                    cx="403.272"
                    cy="49.2118"
                    r="49.2118"
                    fill="#E0A54E"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_23_78">
                  <rect
                    width="232.518"
                    height="232.518"
                    fill="white"
                    transform="translate(175.71 72.0012)"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
        </div>
      </main>
    </AnimatePresence>
  )
}

export default RootCamp
