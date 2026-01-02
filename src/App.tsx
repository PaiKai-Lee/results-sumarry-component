import { useMemo } from 'react';
import Result, { SummaryItemType } from './components/Result';
import { useMockData } from './hooks/useMockData';

function App() {
  const { isLoading, mockData } = useMockData();
  const resultScore = useMemo(() => {
    if (!mockData || mockData.length === 0) return 0;
    const dataLength = mockData.length;
    const totalScore = mockData.reduce((acc, item) => acc + item.score, 0);
    return Math.round(totalScore / dataLength);
  }, [mockData]);

  if (isLoading) {
    return (
      <main className="container mx-auto h-full md:flex md:items-center md:justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <>
      <main className="container mx-auto h-full md:flex md:items-center md:justify-center">
        <Result.Root>
          <Result.ResultScore resultScore={resultScore} />
          <Result.ResultSummary>
            {mockData &&
              mockData.map((item: SummaryItemType, idx) => (
                <Result.ResultSummaryItem key={idx} {...item} />
              ))}
          </Result.ResultSummary>
        </Result.Root>
      </main>
    </>
  );
}

export default App;
