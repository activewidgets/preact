/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import converter from '@activewidgets/frameworks/preact';
import {Component, Fragment, createElement, cloneElement, isValidElement, createContext} from 'preact';
import {Suspense, lazy} from 'preact/compat';

export const {component: PreactComponent} = converter({Component, Fragment, createElement, cloneElement, isValidElement, createContext, Suspense, lazy});
