import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function MalikaLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAsiaAustraliaIcon className="h-12 w-12" />
      <p className="ml-4 text-[44px]">Malika</p>
    </div>
  );
}
