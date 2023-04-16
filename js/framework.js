/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import adapter from '@activewidgets/frameworks/preact';
import {Component, cloneElement, createElement, isValidElement, createContext} from 'preact';

export const {h, build} = adapter({Component, cloneElement, createElement, isValidElement, createContext});
