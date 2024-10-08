"use client"

export default function Subscribe({ style }) {

  return (
    <>
      <h3 className={`${style.footer_spec__title} h2 mb-1   fw-500  text-white`}>Subscribe Now!</h3>
      <p className='mb-0 title-md fw-400 text-white opacity-75 mb-3 mb-lg-4'>Sign up for emails and special offers!</p>

      <div>
        <div className="input-group border rounded-pill border-white p-1 border-opacity-50 ">
          <input className='form-control bg-transparent border-0 rounded-pill text-white title-sm' id="email" name="email" type="email" placeholder="name@example.com" />
          <button type="submit" className={`btn btn-white rounded-pill fw-500 title-sm `} >
            Subscribe</button>
        </div>
     
      </div>

    </>
  );
}