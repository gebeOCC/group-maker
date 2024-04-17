import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="h-screen flex flex-col fixed">
      <nav className="bg-sky-600 text-dark-text px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-lg">Group maker</div>
        <div className="flex space-x-4 items-center justify-between">
          <a href="#" className="hover:text-dark-text-hover">Home</a>
          <a href="#" className="hover:text-dark-text-hover">About</a>
          <a href="#" className="hover:text-dark-text-hover">Contact</a>
        </div>
      </nav>
      <main className="flex-1 bg-gray-600 h-full flex flex-1">
        <aside className="w-1/6 bg-gray-600 text-dark-text p-4">
          <textarea
            className="h-2/3 w-full bg-gray-600 resize-none rounded-\[7px\] border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal border border-slate-400 hover:border-slate-300 focus:border-slate-100 outline-0"
            placeholder="Enter your text here..."
            value={text}
            onChange={handleTextChange}
          />
          <button className='bg-cyan-500 hover:bg-cyan-400 active:translate-y-1 active:translate-x-1 duration-75 text-light-text h-8 w-20 rounded-r rounded-l hover'>Start</button>
        </aside>
        
        <div className="bg-dark-background w-full p-4" style={{height: '94%'}}>
          <div className='w-full flex flex-wrap gap-5 justify-evenly bg-gray-400 overflow-y-auto max-h-full'>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
            <div className='w-1/6'>
              <div className='flex flex-column border-transparent border-2 border-b-white-500 '>
                <div className="pt-2 pb-2 flex justify-center bg-gray-800 text-medium text-gray-400 rounded-t-lg w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group 1</h3>
                </div>
              </div>
              <div className='flex flex-column '>
                <div className="px-5 bg-gray-50 text-center w-full text-medium text-gray-100 dark:bg-gray-800 rounded-b-lg">
                  <p className="mb-2 text-l">Barry</p>
                  <p className="mb-2 text-l">Taroy</p>
                  <p className="mb-2 text-l">Gebe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;