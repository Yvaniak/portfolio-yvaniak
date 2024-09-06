import Buttons from './buttons'
import Carte from './carte'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1">
        <div className="mb-10">
          <Carte />
        </div>
        <div className="mt-10">
          <Buttons/>
        </div>
      </div>
    </div>
  );
}
