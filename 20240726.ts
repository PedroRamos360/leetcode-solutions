function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number
): number {
  const citiesPathCount: number[] = getCitiesPathCount(
    n,
    edges,
    distanceThreshold
  );
  let minCityIndex = 0;
  let minCityValue = -1;
  for (let i = 0; i < citiesPathCount.length; i++) {
    const city = citiesPathCount[i];
    if (city <= minCityValue) {
      minCityIndex = i;
    }
  }
  return minCityIndex;
}

function getCitiesPathCount(
  n: number,
  edges: number[][],
  distanceThreshold: number
) {
  for (let i = 0; i < n; i++) {
    const immediateNeighbors = getImmediateNeighbors(
      i,
      edges,
      distanceThreshold
    );
  }
  return [];
}

function getImmediateNeighbors(
  element: number,
  edges: number[][],
  distanceThreshold: number
) {
  for (const edge of edges) {
    const { from, to, weight } = getEdgeData(edge);
  }
}

function getEdgeData(edge: number[]) {
  return {
    from: edge[0],
    to: edge[1],
    weight: edge[2],
  };
}
