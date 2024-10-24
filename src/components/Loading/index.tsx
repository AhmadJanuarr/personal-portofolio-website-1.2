export default function Loading() {
    return (
        <div className='flex space-x-2 justify-center items-center bg-white h-28 dark:invert w-full'>
            <span className='sr-only'>Loading...</span>
            <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-5 w-5 bg-black rounded-full animate-bounce'></div>
        </div>
    )
}