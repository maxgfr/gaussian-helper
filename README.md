# gaussian-helper

A simple tool to help you with Gaussian calculations.

## Installation

```bash
yarn add gaussian-helper
```

## Usage

```ts
import { getMedian, getMean, getStandardDeviation } from 'gaussian-helper';

const values = [1, 2, 3, 4, 5];

const median = getMedian(values); // 3
const mean = getMean(values); // 2.5
const standardDeviation = getStandardDeviation(values); // 1.4142135623730951
```