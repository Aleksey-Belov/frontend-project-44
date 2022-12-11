#!/usr/bin/env node

import { requestName, comparisonGameResults } from '../src/index.js';
import { messageWithRules, getDataForTask } from '../games/brain-prime-games.js';

requestName();
comparisonGameResults(messageWithRules, getDataForTask);
