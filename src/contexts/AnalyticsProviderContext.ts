import {createContext} from 'react';

import {Analytics} from '../mixin';

const AnalyticsProviderContext = createContext<typeof Analytics>(Analytics);

export default AnalyticsProviderContext;
