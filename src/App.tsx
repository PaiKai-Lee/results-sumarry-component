import { useEffect, useState  } from 'react';
import Result, { SummaryItemType } from './components/Result';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mockData, setMockData] = useState<SummaryItemType[]>([]);
  const [resultScore, setResultScore] = useState<number>(0);
  useEffect(() => {
    setIsLoading(true);
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setMockData(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const total = mockData.length;
    let score = 0;
    mockData.forEach((item) => {
      score += item.score;
    });
    const resultScore = Math.round(score / total);
    setResultScore(resultScore);
  },[mockData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="container mx-auto h-full md:flex md:items-center md:justify-center">
        <Result.Root>
          <Result.ResultScore  resultScore={resultScore}/>
          <Result.ResultSummary >
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
