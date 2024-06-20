export const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className="input input-bordered rounded-xl" />
        <button type='submit' className="btn btn-circle bg-purple-500 text-black">
            Icon
        </button>
    </form>
  )
}
