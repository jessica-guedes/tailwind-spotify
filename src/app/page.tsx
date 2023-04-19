import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from 'lucide-react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-52 bg-zinc-950 p-6'>

          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>MPB Mix</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Why you gotta kick me </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>heart attach and stroke</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>queens of my musical </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>rockezinho</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>suerte</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Plenitude criativa </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Coding</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>leticia + jessica</a>
         
          </nav>
        </aside>
        <main className='flex-1 p-6'>
         <div className='flex items-center gap-4'>
         <button className='rounded-full bg-black/40 p-1'>
            <ChevronLeft />
          </button>
          <button className='rounded-full bg-black/40 p-1'>
            <ChevronRight />
          </button>
         </div>

         <h1 className='font-semibold text-3xl mt-10'>Good Afternon</h1>

         <div className='grid grid-cols-3 gap-6 mt-4'>
          <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiton-colors'>
            <Image src="/albumm.jpg" width={80} height={80} alt="capa do album de twenty one pilots"/>
            <strong>Trench</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiton-colors'>
            <Image src="/albumjustin.png" width={80} height={80} alt="capa do album de justin bieber"/>
            <strong>Justice</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiton-colors'>
            <Image src="/albummelanie.jpg" width={80} height={80} alt="capa do album de melanie martinez"/>
            <strong>Cry Baby</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiton-colors'>
            <Image src="/albumsum.jpg" width={80} height={80} alt="capa do album de sum 41" />
            <strong>Chuck</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiton-colors'>
            <Image src="/albumthefray.jpg" width={80} height={80} alt="capa do album de the fray"/>
            <strong>How to save a life</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiton-colors'>
            <Image src="/theneigh.png" width={80} height={80} alt="capa do album de the neighbourhood"/>
            <strong>Wiped out!</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          
         </div>
         <h2 className='font-semibold text-2xl mt-10'>Made for Jéssica Guedes</h2>

         <div className='grid grid-cols-8 gap-4 mt-4'>
          <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/mix5.jpg" className='w-full' width={80} height={80} alt="capa do album de justin bieber"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a>
          <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/theneigh.png" className='w-full' width={80} height={80} alt="capa do album de justin bieber"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a> 
          <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/albummelanie.jpg" className='w-full' width={80} height={80} alt="capa do album de justin bieber"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a> 
          <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/albumjustin.png" className='w-full' width={80} height={80} alt="capa do album de justin bieber"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a> 
          <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/albumjustin.png" className='w-full' width={80} height={80} alt="capa do album de justin bieber"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a>
         </div>

        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
       <div className='flex items-center gap-3'>
          <Image src="/albumm.jpg" width={50} height={50} alt="capa do album de twenty one pilots"/>
          <div className='flex flex-col'>
            <strong className='font-normal'>Morph</strong>
            <span className='text-xs text-zinc-400'>Twenty One Pilots</span>
          </div>
       </div>
       <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-3'>
          <Shuffle size={20} className='text-zinc-200'/>
          <SkipBack size={20} className='text-zinc-200'/>
          <button className='w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
        <SkipForward size={20} className='text-zinc-200'/>
        <Repeat size={20} className='text-zinc-200'/>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
          </div>
          <span className='text-xs text-zinc-400'>2:14</span>

        </div>
       </div>
       <div className='flex items-center gap-2'>
        <Mic2 size={20}/>
        <LayoutList size={20}/>
        <Laptop2 size={20}/>
        <div className='flex items-center gap-1'>
          <Volume size={20}/>
          <div className='h-1 rounded-full w-20 bg-zinc-600'>
            <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
          </div>
        </div>
        <Maximize2 size={20} />
       </div>
      </footer>
    </div>
  )
}
