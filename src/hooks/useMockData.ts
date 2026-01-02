import { useCallback, useEffect, useState } from 'react';
import { SummaryItemType } from '../components/Result';

export function useMockData() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mockData, setMockData] = useState<SummaryItemType[]>([]);

  const fetchMockData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      const res = await fetch('data.json');
      const data = await res.json();
      setMockData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMockData();
  }, [fetchMockData]);

  return { isLoading, mockData };
}
