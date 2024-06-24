import Content from '@/components/Content';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='flex  relative justify-center  '>
      <div className='container relative '>
        <Navbar />
        <Content />

      </div>
    </main>
  );
}
