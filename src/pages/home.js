import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/nagaia-tasha`}>
                  <ProgressiveImage
                    src={require("../images/yasmeen.webp")}
                    placeholder={require("../images/compressed-image.jpg")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Nagia Tasha'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Nagaia Tasha</div>
              <div className='location'>
                <span>RAKTA</span>
                <span>DHATU</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
