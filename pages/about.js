function About() {
  return (
    <div className='wrapper row4'>
      <footer id='footer' className='hoc clear'>
        <div className='one_quarter first'>
          <h6 className='heading'>Praesent id aliquam</h6>
          <p>
            Non tellus nec sapien lobortis lobortis mauris egestas massa ac
            cursus pellentesque leo risus convallis nulla et fringilla sapien
            magna sit amet magna aliquam tempus praesent sit amet neque sed
            lobortis nulla facilisi [<a href='#'>&hellip;</a>]
          </p>
          <ul className='faico clear'>
            <li>
              <a className='faicon-facebook' href='#'>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a className='faicon-google-plus' href='#'>
                <i className='fab fa-google-plus-g'></i>
              </a>
            </li>
            <li>
              <a className='faicon-linkedin' href='#'>
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a className='faicon-twitter' href='#'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a className='faicon-vk' href='#'>
                <i className='fab fa-vk'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='one_quarter'>
          <h6 className='heading'>Rutrum amet sodales</h6>
          <ul className='nospace linklist'>
            <li>
              <a href='#'>Nulla tincidunt magna</a>
            </li>
            <li>
              <a href='#'>Vel iaculis mollis mi</a>
            </li>
            <li>
              <a href='#'>Lacus tincidunt diam ac</a>
            </li>
            <li>
              <a href='#'>Varius purus justo pretium</a>
            </li>
            <li>
              <a href='#'>Nunc proin tortor elit</a>
            </li>
          </ul>
        </div>
        <div className='one_quarter'>
          <h6 className='heading'>At feugiat in diam</h6>
          <p className='nospace btmspace-15'>
            In vestibulum dolor et augue fusce neque enim scelerisque at
            fermentum.
          </p>
          <form action='#' method='post'>
            <fieldset>
              <legend>Newsletter:</legend>
              <input
                className='btmspace-15'
                type='text'
                value=''
                placeholder='Name'
              />
              <input
                className='btmspace-15'
                type='text'
                value=''
                placeholder='Email'
              />
              <button className='btn' type='submit' value='submit'>
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className='one_quarter last'>
          <h6 className='heading'>Sed imperdiet pharetra</h6>
          <ul className='nospace linklist'>
            <li>
              <article>
                <h6 className='nospace font-x1'>
                  <a href='#'>Massa nam nulla augue</a>
                </h6>
                <time
                  className='font-xs block btmspace-10'
                  datetime='2045-04-06'
                >
                  Friday, 6<sup>th</sup> April 2045
                </time>
                <p className='nospace'>
                  Faucibus nec lacinia quis ornare a eros pellentesque in orci
                  vitae
                </p>
              </article>
            </li>
            <li>
              <article>
                <h6 className='nospace font-x1'>
                  <a href='#'>Velit vehicula auctor</a>
                </h6>
                <time
                  className='font-xs block btmspace-10'
                  datetime='2045-04-05'
                >
                  Thursday, 5<sup>th</sup> April 2045
                </time>
                <p className='nospace'>
                  Pellentesque pulvinar vestibulum bibendum blandit lectus
                  pretium
                </p>
              </article>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default About;
