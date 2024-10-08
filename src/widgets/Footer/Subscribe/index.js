"use client"

export default function Subscribe({ style }) {

  return (
    <div className={`row align-items-center justify-content-between ${style.subscribe_wrap}`}>
      <div className="col-lg-5">
        <h2 className={`${style.footer_spec__title} h4 mb-1 fw-400 text-white mb-lg-0 mb-3 lh-sm`}>Sign up to receive our latest news.</h2>
      </div>

      <div className="col-lg-4">
        <div className="input-group  ">
          <input className='form-control bg-transparent border-light rounded-3 text-white title-sm' id="email" name="email" type="email" placeholder="name@example.com" />
          <button type="submit" className={`btn btn-primary ms-2 rounded-3 text-white fw-600 title-sm `} >
            Subscribe</button>
        </div>
      </div>
    </div>
  );
}