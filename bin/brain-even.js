#!/usr/bin/env node

import { requestName, conditionCheck } from '../src/index.js';
import {
  messageWithRules,
  functionMaterial,
} from '../games/brain-even-games.js';

requestName();
conditionCheck(messageWithRules, functionMaterial);
