"use client"

export default function Subscribe({ style }) {

  return (
    <div className={`row align-items-center justify-content-between ${style.subscribe_wrap}`}>
      <div className="col-lg-5">
        <h3 className={`${style.footer_spec__title} h4 mb-1 fw-400 text-white mb-lg-0 mb-3`}>Sign up to receive our latest news.</h3>
      </div>

      <div className="col-lg-4">
        <div className="input-group border rounded-pill border-white p-1 border-opacity-50 ">
          <input className='form-control bg-transparent border-0 rounded-pill text-white title-sm' id="email" name="email" type="email" placeholder="name@example.com" />
          <button type="submit" className={`btn btn-primary rounded-pill text-white fw-600 title-sm `} >
            Subscribe</button>
        </div>
      </div>
    </div>
  );
}