# gaussian-helper

A simple tool to help you with Gaussian calculations.

## Installation

```bash
yarn add gaussian-helper
```

## Usage

```ts
import { getMedian, getMean, getStandardDeviation } from 'gaussian-helper';

const values = [10, 2, 3, 4, 5];

const median = getMedian(values); // 4
const mean = getMean(values); // 4.800000000000001
const standardDeviation = getStandardDeviation([1, 2, 3, 4, 5]); // 1.4142135623730951
```
