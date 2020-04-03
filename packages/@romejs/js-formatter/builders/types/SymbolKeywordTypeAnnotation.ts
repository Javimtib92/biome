/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Tokens, word} from '../../tokens';

export default function SymbolKeywordTypeAnnotation(): Tokens {
  return [word('symbol')];
}
