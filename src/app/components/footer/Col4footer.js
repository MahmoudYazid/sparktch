const Col4footer = () => {
  return (
    <div className="text-gray-300 flex flex-col item-center justify-center">
      <h3 className="font-semibold text-white mb-3">Stay up to date</h3>
      <div className="flex">
        <input
          type="email"
          placeholder="Your email address"
          className="px-3 py-2 rounded-l bg-gray-700 text-gray-200 focus:outline-none w-full"
        />
        <button className="bg-green-600 px-4 rounded-r text-white">
          ➤
        </button>
      </div>
    </div>
  );
};

export default Col4footer;
