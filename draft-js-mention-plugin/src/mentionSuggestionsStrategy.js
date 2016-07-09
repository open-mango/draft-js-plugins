/* @flow */

import findWithRegex from 'find-with-regex';
import _ from 'lodash';

export default (trigger: String) => (contentBlock: Object, callback: Function) => {
  findWithRegex(new RegExp(`(\\s|^)${_.escapeRegExp(trigger)}[\\w]*`, 'g'), contentBlock, callback);
};