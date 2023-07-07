import { TbSpeakerphone, TbX } from "react-icons/tb";

export default function Announcement() {
  return (
    <div className="bg-yellow-500">
      <div className="max-w-7xl mx-auto py-3 sm:py-1 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex px-1 bg-yellow-600 rounded-xl">
              <TbSpeakerphone
                className="h-6 w-6 text-white text-xs"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-bold text-yellow-800 truncate text-sm">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Big news! We're excited to announce a brand new product.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-2 py-1 border border-transparent shadow-sm text-xs font-medium text-yellow-500 bg-white hover:bg-yellow-50"
            >
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex hover:bg-yellow-400 text-yellow-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 rounded-xl hover:text-white transition-all"
            >
              <span className="sr-only">Dismiss</span>
              <TbX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
