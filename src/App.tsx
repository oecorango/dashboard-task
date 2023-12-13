import { Context } from './context/context';
import { useState } from 'react';
import { Tests } from './interface';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

const App = (): JSX.Element => {
  const [tests, setTests] = useState<Tests[] | null>(null);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [countTests, setCountTests] = useState<number>(0);

  return (
    <Context.Provider
      value={{
        tests,
        setTests,
        search,
        setSearch,
        filter,
        setFilter,
        countTests,
        setCountTests,
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  );
};

export default App;
