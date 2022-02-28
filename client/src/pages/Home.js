import React from 'react'
import FileUploader from '../components/FileUploader'
import HeaderNav from '../components/HeaderNav';

 const Home = () => {
  return (
    <div className='home'>
      <HeaderNav />
      {/* <h4 className='display-4 text-center mb-4'>
          <i className="fa-solid fa-cloud-arrow-up" />
        </h4> */}
      <FileUploader />
    </div>
  )
}
export default Home;