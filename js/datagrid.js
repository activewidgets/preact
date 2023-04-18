/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {PreactComponent} from './framework.js';
import {Datagrid as _Datagrid, Row as _Row, Cells as _Cells} from '@activewidgets/datagrid/js';

export const Datagrid = PreactComponent(_Datagrid);
export const Row = PreactComponent(_Row);
export const Cells = PreactComponent(_Cells);
