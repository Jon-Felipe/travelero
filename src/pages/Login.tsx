function Login() {
  return (
    <div className='p-10'>
      <h3 className='text-2xl font-semibold'>Login</h3>
      <p className='text-slate-400 mt-1'>
        Doesn't have an account yet? <span>Sign Up</span>
      </p>
      <form>
        <div className='mt-10 flex flex-col gap-y-2'>
          <label
            htmlFor='email'
            className='text-sm font-semibold tracking-wide'
          >
            Email Address
          </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='you@example.com'
            className='border-2 py-2 px-4 rounded-md'
          />
        </div>
        <div className='mt-4 flex flex-col gap-y-2'>
          <label
            htmlFor='password'
            className='text-sm font-semibold tracking-wide'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter 6 character or more'
            className='border-2 py-2 px-4 rounded-md'
          />
        </div>
        <button
          type='submit'
          className='mt-8 w-full bg-blue-500 text-white font-bold py-2 rounded-md'
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
