import Content from '@/components/Content';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <main className='flex  justify-center  '>
      <div className='container border border-green-500 '>
        <Navbar />
        <Content/>
      </div>
    </main>
  );
}
