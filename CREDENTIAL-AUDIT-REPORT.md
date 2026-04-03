# CREDENTIAL-AUDIT-REPORT.md

## 1. EXPOSED SECRETS IN HISTORY
### RINGY_SID
- Found in Git Log:
```
-# Server-only (do NOT prefix with VITE_)
-RINGY_ENDPOINT=https://app.ringy.com/api/public/leads/new-lead
-RINGY_SID=iSn1i8zzvctb9s5s59twszulgbvajgnf
-RINGY_AUTH_TOKEN=m0birq...qabr
--
-# Server-only (do NOT prefix with VITE_)
-RINGY_ENDPOINT=https://app.ringy.com/api/public/leads/new-lead
-RINGY_SID=iSn1i8zzvctb9s5s59twszulgbvajgnf
-RINGY_AUTH_TOKEN=m0birq...qabr
--
```
### RINGY_AUTH
- Found in Git Log:
```
-RINGY_ENDPOINT=https://app.ringy.com/api/public/leads/new-lead
-RINGY_SID=iSn1i8zzvctb9s5s59twszulgbvajgnf
-RINGY_AUTH_TOKEN=m0birq...qabr
-JWT_SECRET=bB2C8f...V9zY
--
-RINGY_ENDPOINT=https://app.ringy.com/api/public/leads/new-lead
-RINGY_SID=iSn1i8zzvctb9s5s59twszulgbvajgnf
-RINGY_AUTH_TOKEN=m0birq...qabr
-JWT_SECRET=bB2C8f...V9zY
--
```
### JWT_SECRET
- Found in Git Log:
```
-
-# JWT Secret for token signing (generate with: openssl rand -base64 32)
-JWT_SECRET=your_r...here
-
--
+
+# JWT Secret for token signing (generate with: openssl rand -base64 32)
+JWT_SECRET=your_r...here
+
--
```

## 2. EXPOSED SECRETS IN CURRENT CODE
```
bash: cannot set terminal process group (-1): Inappropriate ioctl for device
bash: no job control in this shell
__HERMES_FENCE_a9f7b3__grep: ./dist/Demystifying_Life_Insurance.mp4: binary file matches
grep: ./dist/30000_Dollar_Mistake_How_to_Avoid_the_ACA_Subsidy_Cliff.m4a: binary file matches
grep: ./dist/Stop Overpaying For Prestige.m4a: binary file matches
grep: ./dist/images/hero/carriers-hero-retina.webp: binary file matches
grep: ./dist/images/hero/about-hero-desktop.webp: binary file matches
grep: ./dist/Why 95 percent of people overpay for life insurance.mp4: binary file matches
grep: ./public/Demystifying_Life_Insurance.mp4: binary file matches
grep: ./public/30000_Dollar_Mistake_How_to_Avoid_the_ACA_Subsidy_Cliff.m4a: binary file matches
grep: ./public/Stop Overpaying For Prestige.m4a: binary file matches
grep: ./public/images/hero/carriers-hero-retina.webp: binary file matches
grep: ./public/images/hero/about-hero-desktop.webp: binary file matches
grep: ./public/Why 95 percent of people overpay for life insurance.mp4: binary file matches
./.env.local:VITE_SANITY_PROJECT_ID=k8oe8f17
./.env.local:VITE_SANITY_DATASET=production
./.env.local:SANITY_API_TOKEN=skZULo...jfl0
./studio/package-lock.json:      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",
./studio/package-lock.json:      "integrity": "sha512-QBMrTWEf00GXZmJyx2lbYD45jpI3TUFnNIzJ5BBc8piGUDwMPa1GV6HJWTZVvY/eiN3fSopl7NRbgGp9sZ9LTA==",
./studio/node_modules/.package-lock.json:      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",
./studio/node_modules/.package-lock.json:      "integrity": "sha512-QBMrTWEf00GXZmJyx2lbYD45jpI3TUFnNIzJ5BBc8piGUDwMPa1GV6HJWTZVvY/eiN3fSopl7NRbgGp9sZ9LTA==",
./studio/node_modules/zod-validation-error/v4/index.js:      if (isZodIssueStringInvalidJWT(issue)) {
./studio/node_modules/zod-validation-error/v4/index.js:        return parseStringInvalidJWT(issue, options);
./studio/node_modules/zod-validation-error/v4/index.js:function isZodIssueStringInvalidJWT(issue) {
./studio/node_modules/zod-validation-error/v4/index.js:function parseStringInvalidJWT(issue, options = {
./studio/node_modules/zod-validation-error/v4/index.mjs.map:{"version":3,"sources":["../lib/v4/isZodErrorLike.ts","../lib/v4/ValidationError.ts","../lib/v4/isValidationError.ts","../lib/v4/isValidationErrorLike.ts","../lib/v4/errorMap/custom.ts","../lib/v4/errorMap/invalidElement.ts","../lib/v4/errorMap/invalidKey.ts","../lib/v4/errorMap/invalidStringFormat.ts","../lib/v4/errorMap/invalidType.ts","../lib/v4/errorMap/invalidUnion.ts","../lib/utils/stringify.ts","../lib/utils/joinValues.ts","../lib/v4/errorMap/invalidValue.ts","../lib/v4/errorMap/notMultipleOf.ts","../lib/v4/errorMap/tooBig.ts","../lib/v4/errorMap/tooSmall.ts","../lib/v4/errorMap/unrecognizedKeys.ts","../lib/v4/errorMap/errorMap.ts","../lib/utils/NonEmptyArray.ts","../lib/utils/joinPath.ts","../lib/utils/titleCase.ts","../lib/v4/MessageBuilder.ts","../lib/v4/fromZodError.ts","../lib/v4/toValidationError.ts","../lib/v4/fromError.ts","../lib/v4/fromZodIssue.ts"],"sourcesContent":["import type * as zod from 'zod/v4/core';\n\nexport function isZodErrorLike(err: unknown): err is zod.$ZodError {\n  return (\n    err instanceof Object &&\n    'name' in err &&\n    (err.name === 'ZodError' || err.name === '$ZodError') &&\n    'issues' in err &&\n    Array.isArray(err.issues)\n  );\n}\n","import { isZodErrorLike } from './isZodErrorLike.ts';\nimport type * as zod from 'zod/v4/core';\n\nexport const ZOD_VALIDATION_ERROR_NAME = 'ZodValidationError';\n\n// make zod-validation-error compatible with\n// earlier to es2022 typescript configurations\n// @see https://github.com/causaly/zod-validation-error/issues/226\nexport interface ErrorOptions {\n  cause?: unknown;\n}\n\nexport class ValidationError extends Error {\n  name: typeof ZOD_VALIDATION_ERROR_NAME;\n  details: Array<zod.$ZodIssue>;\n\n  constructor(message?: string, options?: ErrorOptions) {\n    super(message, options);\n    this.name = ZOD_VALIDATION_ERROR_NAME;\n    this.details = getIssuesFromErrorOptions(options);\n  }\n\n  toString(): string {\n    return this.message;\n  }\n}\n\nfunction getIssuesFromErrorOptions(\n  options?: ErrorOptions\n): Array<zod.$ZodIssue> {\n  if (options) {\n    const cause = options.cause;\n    if (isZodErrorLike(cause)) {\n      return cause.issues;\n    }\n  }\n\n  return [];\n}\n","import { ValidationError } from './ValidationError.ts';\n\nexport function isValidationError(err: unknown): err is ValidationError {\n  return err instanceof ValidationError;\n}\n","import {\n  ZOD_VALIDATION_ERROR_NAME,\n  type ValidationError,\n} from './ValidationError.ts';\n\nexport function isValidationErrorLike(err: unknown): err is ValidationError {\n  return err instanceof Error && err.name === ZOD_VALIDATION_ERROR_NAME;\n}\n","import type * as zod from 'zod/v4/core';\nimport type { AbstractSyntaxTree } from './types.ts';\n\nexport function parseCustomIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueCustom>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: issue.message ?? 'Invalid input',\n  };\n}\n","import type * as zod from 'zod/v4/core';\nimport type { AbstractSyntaxTree } from './types.ts';\n\nexport function parseInvalidElementIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidElement>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: `unexpected element in ${issue.origin}`,\n  };\n}\n","import type * as zod from 'zod/v4/core';\nimport type { AbstractSyntaxTree } from './types.ts';\n\nexport function parseInvalidKeyIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidKey>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: `unexpected key in ${issue.origin}`,\n  };\n}\n","import type { AbstractSyntaxTree, ErrorMapOptions } from './types.ts';\nimport type * as zod from 'zod/v4/core';\n\nexport function parseInvalidStringFormatIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidStringFormat>,\n  options: Pick<ErrorMapOptions, 'displayInvalidFormatDetails'> = {\n    displayInvalidFormatDetails: false,\n  }\n): AbstractSyntaxTree {\n  switch (issue.format) {\n    case 'lowercase':\n    case 'uppercase':\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `value must be in ${issue.format} format`,\n      };\n    default: {\n      if (isZodIssueStringStartsWith(issue)) {\n        return parseStringStartsWith(issue);\n      }\n      if (isZodIssueStringEndsWith(issue)) {\n        return parseStringEndsWith(issue);\n      }\n      if (isZodIssueStringIncludes(issue)) {\n        return parseStringIncludes(issue);\n      }\n      if (isZodIssueStringInvalidRegex(issue)) {\n        return parseStringInvalidRegex(issue, options);\n      }\n      if (isZodIssueStringInvalidJWT(issue)) {\n        return parseStringInvalidJWT(issue, options);\n      }\n\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `invalid ${issue.format}`,\n      };\n    }\n  }\n}\nfunction isZodIssueStringStartsWith(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidStringFormat>\n): issue is zod.$ZodRawIssue<zod.$ZodIssueStringStartsWith> {\n  return issue.format === 'starts_with';\n}\n\nfunction parseStringStartsWith(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueStringStartsWith>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: `value must start with \"${issue.prefix}\"`,\n  };\n}\n\nfunction isZodIssueStringEndsWith(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidStringFormat>\n): issue is zod.$ZodRawIssue<zod.$ZodIssueStringEndsWith> {\n  return issue.format === 'ends_with';\n}\nfunction parseStringEndsWith(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueStringEndsWith>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: `value must end with \"${issue.suffix}\"`,\n  };\n}\n\nfunction isZodIssueStringIncludes(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidStringFormat>\n): issue is zod.$ZodRawIssue<zod.$ZodIssueStringIncludes> {\n  return issue.format === 'includes';\n}\nfunction parseStringIncludes(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueStringIncludes>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: `value must include \"${issue.includes}\"`,\n  };\n}\n\nfunction isZodIssueStringInvalidRegex(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidStringFormat>\n): issue is zod.$ZodRawIssue<zod.$ZodIssueStringInvalidRegex> {\n  return issue.format === 'regex';\n}\nfunction parseStringInvalidRegex(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueStringInvalidRegex>,\n  options: Pick<ErrorMapOptions, 'displayInvalidFormatDetails'> = {\n    displayInvalidFormatDetails: false,\n  }\n): AbstractSyntaxTree {\n  let message = 'value must match pattern';\n  if (options.displayInvalidFormatDetails) {\n    message += ` \"${issue.pattern}\"`;\n  }\n\n  return {\n    type: issue.code,\n    path: issue.path,\n    message,\n  };\n}\n\nfunction isZodIssueStringInvalidJWT(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidStringFormat>\n): issue is zod.$ZodRawIssue<zod.$ZodIssueStringInvalidJWT> {\n  return issue.format === 'jwt';\n}\nfunction parseStringInvalidJWT(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueStringInvalidJWT>,\n  options: Pick<ErrorMapOptions, 'displayInvalidFormatDetails'> = {\n    displayInvalidFormatDetails: false,\n  }\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message:\n      options.displayInvalidFormatDetails && issue.algorithm\n        ? `invalid jwt/${issue.algorithm}`\n        : `invalid jwt`,\n  };\n}\n","import type { AbstractSyntaxTree } from './types.ts';\nimport type * as zod from 'zod/v4/core';\n\nexport function parseInvalidTypeIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidType>\n): AbstractSyntaxTree {\n  let message = `expected ${issue.expected}`;\n\n  // note: it's possible that issue.input is not defined\n  if ('input' in issue) {\n    message += `, received ${getTypeName(issue.input)}`;\n  }\n\n  return {\n    type: issue.code,\n    path: issue.path,\n    message,\n  };\n}\n\nexport function getTypeName(value: unknown): string {\n  if (typeof value === 'object') {\n    if (value === null) {\n      return 'null';\n    }\n    if (value === undefined) {\n      return 'undefined';\n    }\n    if (Array.isArray(value)) {\n      return 'array';\n    }\n    if (value instanceof Date) {\n      return 'date';\n    }\n    if (value instanceof RegExp) {\n      return 'regexp';\n    }\n    if (value instanceof Map) {\n      return 'map';\n    }\n    if (value instanceof Set) {\n      return 'set';\n    }\n    if (value instanceof Error) {\n      return 'error';\n    }\n    if (value instanceof Function) {\n      return 'function';\n    }\n    return 'object';\n  }\n\n  return typeof value;\n}\n","import type * as zod from 'zod/v4/core';\nimport type { AbstractSyntaxTree } from './types.ts';\n\nexport function parseInvalidUnionIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidUnion>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: issue.message ?? 'Invalid input',\n  };\n}\n","import type { util } from 'zod/v4/core';\n\nexport function stringifySymbol(symbol: symbol): string {\n  return symbol.description ?? '';\n}\n\nexport type StringifyValueOptions = {\n  wrapStringValueInQuote?: boolean;\n  localization?: boolean | Intl.LocalesArgument;\n};\n\nexport function stringify(\n  value: util.Primitive | Date,\n  options: StringifyValueOptions = {}\n): string {\n  switch (typeof value) {\n    case 'symbol':\n      return stringifySymbol(value);\n    case 'bigint':\n    case 'number': {\n      switch (options.localization) {\n        case true:\n          return value.toLocaleString();\n        case false:\n          return value.toString();\n        default:\n          return value.toLocaleString(options.localization);\n      }\n    }\n    case 'string': {\n      if (options.wrapStringValueInQuote) {\n        return `\"${value}\"`;\n      }\n      return value;\n    }\n    default: {\n      if (value instanceof Date) {\n        switch (options.localization) {\n          case true:\n            return value.toLocaleString();\n          case false:\n            return value.toISOString();\n          default:\n            return value.toLocaleString(options.localization);\n        }\n      }\n      return String(value);\n    }\n  }\n}\n","import { stringify } from './stringify.ts';\nimport type { util } from 'zod/v4/core';\n\nexport type JoinValuesOptions = {\n  separator: string;\n  lastSeparator?: string;\n  wrapStringValuesInQuote?: boolean;\n  maxValuesToDisplay?: number;\n};\n\nexport function joinValues(\n  values: Array<util.Primitive>,\n  options: JoinValuesOptions\n): string {\n  const valuesToDisplay = (\n    options.maxValuesToDisplay\n      ? values.slice(0, options.maxValuesToDisplay)\n      : values\n  ).map((value) => {\n    return stringify(value, {\n      wrapStringValueInQuote: options.wrapStringValuesInQuote,\n    });\n  });\n\n  // add remaining values count (if any)\n  // this is to avoid displaying too many values in the error message\n  // and to keep the message concise\n  // e.g. `\"foo\", \"bar\", \"baz\" or 3 more value(s)`\n  if (valuesToDisplay.length < values.length) {\n    valuesToDisplay.push(\n      `${values.length - valuesToDisplay.length} more value(s)`\n    );\n  }\n\n  return valuesToDisplay.reduce<string>((acc, value, index) => {\n    if (index > 0) {\n      if (index === valuesToDisplay.length - 1 && options.lastSeparator) {\n        acc += options.lastSeparator;\n      } else {\n        acc += options.separator;\n      }\n    }\n\n    acc += value;\n\n    return acc;\n  }, '');\n}\n","import { joinValues } from '../../utils/joinValues.ts';\nimport { stringify } from '../../utils/stringify.ts';\nimport type { AbstractSyntaxTree, ErrorMapOptions } from './types.ts';\nimport type * as zod from 'zod/v4/core';\n\nexport function parseInvalidValueIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueInvalidValue>,\n  options: Pick<\n    ErrorMapOptions,\n    | 'allowedValuesSeparator'\n    | 'maxAllowedValuesToDisplay'\n    | 'wrapAllowedValuesInQuote'\n    | 'allowedValuesLastSeparator'\n  >\n): AbstractSyntaxTree {\n  let message: string;\n\n  if (issue.values.length === 0) {\n    message = 'invalid value';\n  } else if (issue.values.length === 1) {\n    const valueStr = stringify(issue.values[0], {\n      wrapStringValueInQuote: true,\n    });\n    message = `expected value to be ${valueStr}`;\n  } else {\n    const valuesStr = joinValues(issue.values, {\n      separator: options.allowedValuesSeparator,\n      lastSeparator: options.allowedValuesLastSeparator,\n      wrapStringValuesInQuote: options.wrapAllowedValuesInQuote,\n      maxValuesToDisplay: options.maxAllowedValuesToDisplay,\n    });\n    message = `expected value to be one of ${valuesStr}`;\n  }\n\n  return {\n    type: issue.code,\n    path: issue.path,\n    message,\n  };\n}\n","import type * as zod from 'zod/v4/core';\nimport type { AbstractSyntaxTree } from './types.ts';\n\nexport function parseNotMultipleOfIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueNotMultipleOf>\n): AbstractSyntaxTree {\n  return {\n    type: issue.code,\n    path: issue.path,\n    message: `expected multiple of ${issue.divisor}`,\n  };\n}\n","import { stringify } from '../../utils/stringify.ts';\nimport type { AbstractSyntaxTree, ErrorMapOptions } from './types.ts';\nimport type * as zod from 'zod/v4/core';\n\nexport function parseTooBigIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueTooBig>,\n  options: Pick<ErrorMapOptions, 'dateLocalization' | 'numberLocalization'>\n): AbstractSyntaxTree {\n  const maxValueStr =\n    issue.origin === 'date'\n      ? stringify(new Date(issue.maximum as number), {\n          localization: options.dateLocalization,\n        })\n      : stringify(issue.maximum, {\n          localization: options.numberLocalization,\n        });\n\n  switch (issue.origin) {\n    case 'number':\n    case 'int':\n    case 'bigint': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `number must be less than${\n          issue.inclusive ? ' or equal to' : ''\n        } ${maxValueStr}`,\n      };\n    }\n    case 'string': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `string must contain at most ${maxValueStr} character(s)`,\n      };\n    }\n    case 'date': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `date must be ${\n          issue.inclusive ? 'prior or equal to' : 'prior to'\n        } \"${maxValueStr}\"`,\n      };\n    }\n    case 'array': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `array must contain at most ${maxValueStr} item(s)`,\n      };\n    }\n    case 'set': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `set must contain at most ${maxValueStr} item(s)`,\n      };\n    }\n    case 'file': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `file must not exceed ${maxValueStr} byte(s) in size`,\n      };\n    }\n    default:\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `value must be less than${\n          issue.inclusive ? ' or equal to' : ''\n        } ${maxValueStr}`,\n      };\n  }\n}\n","import { stringify } from '../../utils/stringify.ts';\nimport type * as zod from 'zod/v4/core';\nimport type { AbstractSyntaxTree, ErrorMapOptions } from './types.ts';\n\nexport function parseTooSmallIssue(\n  issue: zod.$ZodRawIssue<zod.$ZodIssueTooSmall>,\n  options: Pick<ErrorMapOptions, 'dateLocalization' | 'numberLocalization'>\n): AbstractSyntaxTree {\n  const minValueStr =\n    issue.origin === 'date'\n      ? stringify(new Date(issue.minimum as number), {\n          localization: options.dateLocalization,\n        })\n      : stringify(issue.minimum, {\n          localization: options.numberLocalization,\n        });\n\n  switch (issue.origin) {\n    case 'number':\n    case 'int':\n    case 'bigint': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `number must be greater than${\n          issue.inclusive ? ' or equal to' : ''\n        } ${minValueStr}`,\n      };\n    }\n    case 'date': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `date must be ${\n          issue.inclusive ? 'later or equal to' : 'later to'\n        } \"${minValueStr}\"`,\n      };\n    }\n    case 'string': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `string must contain at least ${minValueStr} character(s)`,\n      };\n    }\n    case 'array': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `array must contain at least ${minValueStr} item(s)`,\n      };\n    }\n    case 'set': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `set must contain at least ${minValueStr} item(s)`,\n      };\n    }\n    case 'file': {\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `file must be at least ${minValueStr} byte(s) in size`,\n      };\n    }\n    default:\n      return {\n        type: issue.code,\n        path: issue.path,\n        message: `value must be greater than${\n          issue.inclusive ? ' or equal to' : ''\n        } ${minValueStr}`,\n

... [OUTPUT TRUNCATED - 39236460 chars omitted out of 39286460 total] ...

        throw new JWTInvalid('JWTs must contain a payload');
./node_modules/jose/dist/browser/util/decode_jwt.js:        throw new JWTInvalid('Failed to base64url decode the payload');
./node_modules/jose/dist/browser/util/decode_jwt.js:        throw new JWTInvalid('Failed to parse the decoded payload as JSON');
./node_modules/jose/dist/browser/util/decode_jwt.js:        throw new JWTInvalid('Invalid JWT Claims Set');
./node_modules/jose/dist/browser/util/errors.js:export class JWTClaimValidationFailed extends JOSEError {
./node_modules/jose/dist/browser/util/errors.js:        this.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
./node_modules/jose/dist/browser/util/errors.js:JWTClaimValidationFailed.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
./node_modules/jose/dist/browser/util/errors.js:export class JWTExpired extends JOSEError {
./node_modules/jose/dist/browser/util/errors.js:        this.code = 'ERR_JWT_EXPIRED';
./node_modules/jose/dist/browser/util/errors.js:JWTExpired.code = 'ERR_JWT_EXPIRED';
./node_modules/jose/dist/browser/util/errors.js:export class JWTInvalid extends JOSEError {
./node_modules/jose/dist/browser/util/errors.js:        this.code = 'ERR_JWT_INVALID';
./node_modules/jose/dist/browser/util/errors.js:JWTInvalid.code = 'ERR_JWT_INVALID';
./node_modules/jose/dist/node/esm/index.js:export { SignJWT } from './jwt/sign.js';
./node_modules/jose/dist/node/esm/index.js:export { EncryptJWT } from './jwt/encrypt.js';
./node_modules/jose/dist/node/esm/index.js:export { UnsecuredJWT } from './jwt/unsecured.js';
./node_modules/jose/dist/node/esm/jwt/decrypt.js:import { JWTClaimValidationFailed } from '../util/errors.js';
./node_modules/jose/dist/node/esm/jwt/decrypt.js:        throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, 'iss', 'mismatch');
./node_modules/jose/dist/node/esm/jwt/decrypt.js:        throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, 'sub', 'mismatch');
./node_modules/jose/dist/node/esm/jwt/decrypt.js:        throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, 'aud', 'mismatch');
./node_modules/jose/dist/node/esm/jwt/produce.js:export class ProduceJWT {
./node_modules/jose/dist/node/esm/jwt/produce.js:            throw new TypeError('JWT Claims Set MUST be an object');
./node_modules/jose/dist/node/esm/jwt/unsecured.js:import { JWTInvalid } from '../util/errors.js';
./node_modules/jose/dist/node/esm/jwt/unsecured.js:import { ProduceJWT } from './produce.js';
./node_modules/jose/dist/node/esm/jwt/unsecured.js:export class UnsecuredJWT extends ProduceJWT {
./node_modules/jose/dist/node/esm/jwt/unsecured.js:            throw new JWTInvalid('Unsecured JWT must be a string');
./node_modules/jose/dist/node/esm/jwt/unsecured.js:            throw new JWTInvalid('Invalid Unsecured JWT');
./node_modules/jose/dist/node/esm/jwt/unsecured.js:            throw new JWTInvalid('Invalid Unsecured JWT');
./node_modules/jose/dist/node/esm/jwt/verify.js:import { JWTInvalid } from '../util/errors.js';
./node_modules/jose/dist/node/esm/jwt/verify.js:        throw new JWTInvalid('JWTs MUST NOT use unencoded payload');
./node_modules/jose/dist/node/esm/jwt/encrypt.js:import { ProduceJWT } from './produce.js';
./node_modules/jose/dist/node/esm/jwt/encrypt.js:export class EncryptJWT extends ProduceJWT {
./node_modules/jose/dist/node/esm/jwt/sign.js:import { JWTInvalid } from '../util/errors.js';
./node_modules/jose/dist/node/esm/jwt/sign.js:import { ProduceJWT } from './produce.js';
./node_modules/jose/dist/node/esm/jwt/sign.js:export class SignJWT extends ProduceJWT {
./node_modules/jose/dist/node/esm/jwt/sign.js:            throw new JWTInvalid('JWTs MUST NOT use unencoded payload');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:import { JWTClaimValidationFailed, JWTExpired, JWTInvalid } from '../util/errors.js';
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:        throw new JWTInvalid('JWT Claims Set must be a top-level JSON object');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:            throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, 'missing');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:        throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, 'iss', 'check_failed');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:        throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, 'sub', 'check_failed');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:        throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, 'aud', 'check_failed');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:        throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, 'iat', 'invalid');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:            throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, 'nbf', 'invalid');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:            throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:            throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, 'exp', 'invalid');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:            throw new JWTExpired('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:            throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
./node_modules/jose/dist/node/esm/lib/jwt_claims_set.js:            throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
./node_modules/jose/dist/node/esm/util/decode_jwt.js:import { JWTInvalid } from './errors.js';
./node_modules/jose/dist/node/esm/util/decode_jwt.js:        throw new JWTInvalid('JWTs must use Compact JWS serialization, JWT must be a string');
./node_modules/jose/dist/node/esm/util/decode_jwt.js:        throw new JWTInvalid('Only JWTs using Compact JWS serialization can be decoded');
./node_modules/jose/dist/node/esm/util/decode_jwt.js:        throw new JWTInvalid('Invalid JWT');
./node_modules/jose/dist/node/esm/util/decode_jwt.js:        throw new JWTInvalid('JWTs must contain a payload');
./node_modules/jose/dist/node/esm/util/decode_jwt.js:        throw new JWTInvalid('Failed to base64url decode the payload');
./node_modules/jose/dist/node/esm/util/decode_jwt.js:        throw new JWTInvalid('Failed to parse the decoded payload as JSON');
./node_modules/jose/dist/node/esm/util/decode_jwt.js:        throw new JWTInvalid('Invalid JWT Claims Set');
./node_modules/jose/dist/node/esm/util/errors.js:export class JWTClaimValidationFailed extends JOSEError {
./node_modules/jose/dist/node/esm/util/errors.js:    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
./node_modules/jose/dist/node/esm/util/errors.js:    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
./node_modules/jose/dist/node/esm/util/errors.js:export class JWTExpired extends JOSEError {
./node_modules/jose/dist/node/esm/util/errors.js:    static code = 'ERR_JWT_EXPIRED';
./node_modules/jose/dist/node/esm/util/errors.js:    code = 'ERR_JWT_EXPIRED';
./node_modules/jose/dist/node/esm/util/errors.js:export class JWTInvalid extends JOSEError {
./node_modules/jose/dist/node/esm/util/errors.js:    static code = 'ERR_JWT_INVALID';
./node_modules/jose/dist/node/esm/util/errors.js:    code = 'ERR_JWT_INVALID';
./node_modules/jose/dist/node/cjs/index.js:exports.cryptoRuntime = exports.base64url = exports.generateSecret=export...Pair = exports.errors = exports.decodeJwt = exports.decodeProtectedHeader = exports.importJWK = exports.importX509 = exports.importPKCS8 = exports.importSPKI = exports.exportJWK = exports.exportSPKI = exports.exportPKCS8 = exports.UnsecuredJWT = exports.experimental_jwksCache = exports.jwksCache = exports.createRemoteJWKSet = exports.createLocalJWKSet = exports.EmbeddedJWK = exports.calculateJwkThumbprintUri = exports.calculateJwkThumbprint = exports.EncryptJWT = exports.SignJWT = exports.GeneralSign = exports.FlattenedSign = exports.CompactSign = exports.FlattenedEncrypt = exports.CompactEncrypt = exports.jwtDecrypt = exports.jwtVerify = exports.generalVerify = exports.flattenedVerify = exports.compactVerify = exports.GeneralEncrypt = exports.generalDecrypt = exports.flattenedDecrypt = exports.compactDecrypt = void 0;
./node_modules/jose/dist/node/cjs/index.js:Object.defineProperty(exports, "SignJWT", { enumerable: true, get: function () { return sign_js_4.SignJWT; } });
./node_modules/jose/dist/node/cjs/index.js:Object.defineProperty(exports, "EncryptJWT", { enumerable: true, get: function () { return encrypt_js_4.EncryptJWT; } });
./node_modules/jose/dist/node/cjs/index.js:Object.defineProperty(exports, "UnsecuredJWT", { enumerable: true, get: function () { return unsecured_js_1.UnsecuredJWT; } });
./node_modules/jose/dist/node/cjs/jwt/decrypt.js:        throw new errors_js_1.JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, 'iss', 'mismatch');
./node_modules/jose/dist/node/cjs/jwt/decrypt.js:        throw new errors_js_1.JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, 'sub', 'mismatch');
./node_modules/jose/dist/node/cjs/jwt/decrypt.js:        throw new errors_js_1.JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, 'aud', 'mismatch');
./node_modules/jose/dist/node/cjs/jwt/produce.js:exports.ProduceJWT = void 0;
./node_modules/jose/dist/node/cjs/jwt/produce.js:class ProduceJWT {
./node_modules/jose/dist/node/cjs/jwt/produce.js:            throw new TypeError('JWT Claims Set MUST be an object');
./node_modules/jose/dist/node/cjs/jwt/produce.js:exports.ProduceJWT = ProduceJWT;
./node_modules/jose/dist/node/cjs/jwt/unsecured.js:exports.UnsecuredJWT = void 0;
./node_modules/jose/dist/node/cjs/jwt/unsecured.js:class UnsecuredJWT extends produce_js_1.ProduceJWT {
./node_modules/jose/dist/node/cjs/jwt/unsecured.js:            throw new errors_js_1.JWTInvalid('Unsecured JWT must be a string');
./node_modules/jose/dist/node/cjs/jwt/unsecured.js:            throw new errors_js_1.JWTInvalid('Invalid Unsecured JWT');
./node_modules/jose/dist/node/cjs/jwt/unsecured.js:            throw new errors_js_1.JWTInvalid('Invalid Unsecured JWT');
./node_modules/jose/dist/node/cjs/jwt/unsecured.js:exports.UnsecuredJWT = UnsecuredJWT;
./node_modules/jose/dist/node/cjs/jwt/verify.js:        throw new errors_js_1.JWTInvalid('JWTs MUST NOT use unencoded payload');
./node_modules/jose/dist/node/cjs/jwt/encrypt.js:exports.EncryptJWT = void 0;
./node_modules/jose/dist/node/cjs/jwt/encrypt.js:class EncryptJWT extends produce_js_1.ProduceJWT {
./node_modules/jose/dist/node/cjs/jwt/encrypt.js:exports.EncryptJWT = EncryptJWT;
./node_modules/jose/dist/node/cjs/jwt/sign.js:exports.SignJWT = void 0;
./node_modules/jose/dist/node/cjs/jwt/sign.js:class SignJWT extends produce_js_1.ProduceJWT {
./node_modules/jose/dist/node/cjs/jwt/sign.js:            throw new errors_js_1.JWTInvalid('JWTs MUST NOT use unencoded payload');
./node_modules/jose/dist/node/cjs/jwt/sign.js:exports.SignJWT = SignJWT;
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:        throw new errors_js_1.JWTInvalid('JWT Claims Set must be a top-level JSON object');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:        throw new errors_js_1.JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:            throw new errors_js_1.JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, 'missing');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:        throw new errors_js_1.JWTClaimValidationFailed('unexpected "iss" claim value', payload, 'iss', 'check_failed');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:        throw new errors_js_1.JWTClaimValidationFailed('unexpected "sub" claim value', payload, 'sub', 'check_failed');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:        throw new errors_js_1.JWTClaimValidationFailed('unexpected "aud" claim value', payload, 'aud', 'check_failed');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:        throw new errors_js_1.JWTClaimValidationFailed('"iat" claim must be a number', payload, 'iat', 'invalid');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:            throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim must be a number', payload, 'nbf', 'invalid');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:            throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:            throw new errors_js_1.JWTClaimValidationFailed('"exp" claim must be a number', payload, 'exp', 'invalid');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:            throw new errors_js_1.JWTExpired('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:            throw new errors_js_1.JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
./node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js:            throw new errors_js_1.JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
./node_modules/jose/dist/node/cjs/util/decode_jwt.js:        throw new errors_js_1.JWTInvalid('JWTs must use Compact JWS serialization, JWT must be a string');
./node_modules/jose/dist/node/cjs/util/decode_jwt.js:        throw new errors_js_1.JWTInvalid('Only JWTs using Compact JWS serialization can be decoded');
./node_modules/jose/dist/node/cjs/util/decode_jwt.js:        throw new errors_js_1.JWTInvalid('Invalid JWT');
./node_modules/jose/dist/node/cjs/util/decode_jwt.js:        throw new errors_js_1.JWTInvalid('JWTs must contain a payload');
./node_modules/jose/dist/node/cjs/util/decode_jwt.js:        throw new errors_js_1.JWTInvalid('Failed to base64url decode the payload');
./node_modules/jose/dist/node/cjs/util/decode_jwt.js:        throw new errors_js_1.JWTInvalid('Failed to parse the decoded payload as JSON');
./node_modules/jose/dist/node/cjs/util/decode_jwt.js:        throw new errors_js_1.JWTInvalid('Invalid JWT Claims Set');
./node_modules/jose/dist/node/cjs/util/errors.js:exports.JWSSignatureVerificationFailed = exports.JWKSTimeout = exports.JWKSMultipleMatchingKeys = exports.JWKSNoMatchingKey = exports.JWKSInvalid = exports.JWKInvalid = exports.JWTInvalid = exports.JWSInvalid = exports.JWEInvalid = exports.JWEDecryptionFailed = exports.JOSENotSupported = exports.JOSEAlgNotAllowed = exports.JWTExpired = exports.JWTClaimValidationFailed = exports.JOSEError = void 0;
./node_modules/jose/dist/node/cjs/util/errors.js:class JWTClaimValidationFailed extends JOSEError {
./node_modules/jose/dist/node/cjs/util/errors.js:    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
./node_modules/jose/dist/node/cjs/util/errors.js:    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
./node_modules/jose/dist/node/cjs/util/errors.js:exports.JWTClaimValidationFailed = JWTClaimValidationFailed;
./node_modules/jose/dist/node/cjs/util/errors.js:class JWTExpired extends JOSEError {
./node_modules/jose/dist/node/cjs/util/errors.js:    static code = 'ERR_JWT_EXPIRED';
./node_modules/jose/dist/node/cjs/util/errors.js:    code = 'ERR_JWT_EXPIRED';
./node_modules/jose/dist/node/cjs/util/errors.js:exports.JWTExpired = JWTExpired;
./node_modules/jose/dist/node/cjs/util/errors.js:class JWTInvalid extends JOSEError {
./node_modules/jose/dist/node/cjs/util/errors.js:    static code = 'ERR_JWT_INVALID';
./node_modules/jose/dist/node/cjs/util/errors.js:    code = 'ERR_JWT_INVALID';
./node_modules/jose/dist/node/cjs/util/errors.js:exports.JWTInvalid = JWTInvalid;
./node_modules/jose/dist/types/index.d.ts:export type { JWTVerifyOptions, JWTVerifyGetKey } from './jwt/verify';
./node_modules/jose/dist/types/index.d.ts:export type { JWTDecryptOptions, JWTDecryptGetKey } from './jwt/decrypt';
./node_modules/jose/dist/types/index.d.ts:export type { ProduceJWT } from './jwt/produce';
./node_modules/jose/dist/types/index.d.ts:export { SignJWT } from './jwt/sign';
./node_modules/jose/dist/types/index.d.ts:export { EncryptJWT } from './jwt/encrypt';
./node_modules/jose/dist/types/index.d.ts:export { UnsecuredJWT } from './jwt/unsecured';
./node_modules/jose/dist/types/index.d.ts:export type { KeyLike, JWK, JWKParameters, JWK_OKP_Public, JWK_OKP_Private, JWK_EC_Public, JWK_EC_Private, JWK_RSA_Public, JWK_RSA_Private, JWK_oct, FlattenedJWSInput, GeneralJWSInput, FlattenedJWS, GeneralJWS, JoseHeaderParameters, JWSHeaderParameters, JWEKeyManagementHeaderParameters, FlattenedJWE, GeneralJWE, JWEHeaderParameters, CritOption, DecryptOptions, EncryptOptions, JWTClaimVerificationOptions, VerifyOptions, SignOptions, JWTPayload, FlattenedDecryptResult, GeneralDecryptResult, CompactDecryptResult, FlattenedVerifyResult, GeneralVerifyResult, CompactVerifyResult, JWTVerifyResult, JWTDecryptResult, ResolvedKey, CompactJWEHeaderParameters, CompactJWSHeaderParameters, JWTHeaderParameters, JSONWebKeySet, CryptoRuntime, GetKeyFunction, } from './types';
./node_modules/jose/dist/types/jwk/embedded.d.ts: * EmbeddedJWK is an implementation of a GetKeyFunction intended to be used with the JWS/JWT verify
./node_modules/jose/dist/types/jwt/encrypt.d.ts:import { ProduceJWT } from './produce';
./node_modules/jose/dist/types/jwt/encrypt.d.ts: * The EncryptJWT class is used to build and encrypt Compact JWE formatted JSON Web Tokens.
./node_modules/jose/dist/types/jwt/encrypt.d.ts:export declare class EncryptJWT extends ProduceJWT {
./node_modules/jose/dist/types/jwt/encrypt.d.ts:     * Sets the JWE Protected Header on the EncryptJWT object.
./node_modules/jose/dist/types/jwt/encrypt.d.ts:     * Encrypts and returns the JWT.
./node_modules/jose/dist/types/jwt/encrypt.d.ts:     * @param key Public Key or Secret to encrypt the JWT with. See
./node_modules/jose/dist/types/jwt/verify.d.ts:import type { JWK, JWTPayload, KeyLike, VerifyOptions, JWTClaimVerificationOptions, JWTHeaderParameters, GenericGetKeyFunction, FlattenedJWSInput, JWTVerifyResult, ResolvedKey } from '../types';
./node_modules/jose/dist/types/jwt/verify.d.ts:/** Combination of JWS Verification options and JWT Claims Set verification options. */
./node_modules/jose/dist/types/jwt/verify.d.ts:export interface JWTVerifyOptions extends VerifyOptions, JWTClaimVerificationOptions {
./node_modules/jose/dist/types/jwt/verify.d.ts: * Interface for JWT Verification dynamic key resolution. No token components have been verified at
./node_modules/jose/dist/types/jwt/verify.d.ts:export interface JWTVerifyGetKey extends GenericGetKeyFunction<JWTHeaderParameters, FlattenedJWSInput, KeyLike | JWK | Uint8Array> {
./node_modules/jose/dist/types/jwt/verify.d.ts: * Verifies the JWT format (to be a JWS Compact format), verifies the JWS signature, validates the
./node_modules/jose/dist/types/jwt/verify.d.ts: * JWT Claims Set.
./node_modules/jose/dist/types/jwt/verify.d.ts: * @param key Key to verify the JWT with. See
./node_modules/jose/dist/types/jwt/verify.d.ts: * @param options JWT Decryption and JWT Claims Set validation options.
./node_modules/jose/dist/types/jwt/verify.d.ts:export declare function jwtVerify<PayloadType = JWTPayload>(jwt: string | Uint8Array, key: KeyLike | Uint8Array | JWK, options?: JWTVerifyOptions): Promise<JWTVerifyResult<PayloadType>>;
./node_modules/jose/dist/types/jwt/verify.d.ts: * @param getKey Function resolving a key to verify the JWT with. See
./node_modules/jose/dist/types/jwt/verify.d.ts: * @param options JWT Decryption and JWT Claims Set validation options.
./node_modules/jose/dist/types/jwt/verify.d.ts:export declare function jwtVerify<PayloadType = JWTPayload, KeyLikeType extends KeyLike = KeyLike>(jwt: string | Uint8Array, getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): Promise<JWTVerifyResult<PayloadType> & ResolvedKey<KeyLikeType>>;
./node_modules/jose/dist/types/jwt/unsecured.d.ts:import type { JWSHeaderParameters, JWTClaimVerificationOptions, JWTPayload } from '../types';
./node_modules/jose/dist/types/jwt/unsecured.d.ts:import { ProduceJWT } from './produce';
./node_modules/jose/dist/types/jwt/unsecured.d.ts:export interface UnsecuredResult<PayloadType = JWTPayload> {
./node_modules/jose/dist/types/jwt/unsecured.d.ts:    payload: PayloadType & JWTPayload;
./node_modules/jose/dist/types/jwt/unsecured.d.ts: * The UnsecuredJWT class is a utility for dealing with `{ "alg": "none" }` Unsecured JWTs.
./node_modules/jose/dist/types/jwt/unsecured.d.ts:export declare class UnsecuredJWT extends ProduceJWT {
./node_modules/jose/dist/types/jwt/unsecured.d.ts:    /** Encodes the Unsecured JWT. */
./node_modules/jose/dist/types/jwt/unsecured.d.ts:     * Decodes an unsecured JWT.
./node_modules/jose/dist/types/jwt/unsecured.d.ts:     * @param jwt Unsecured JWT to decode the payload of.
./node_modules/jose/dist/types/jwt/unsecured.d.ts:     * @param options JWT Claims Set validation options.
./node_modules/jose/dist/types/jwt/unsecured.d.ts:    static decode<PayloadType = JWTPayload>(jwt: string, options?: JWTClaimVerificationOptions): UnsecuredResult<PayloadType>;
./node_modules/jose/dist/types/jwt/decrypt.d.ts:import type { JWTPayload, KeyLike, DecryptOptions, JWTClaimVerificationOptions, GetKeyFunction, CompactJWEHeaderParameters, FlattenedJWE, JWTDecryptResult, ResolvedKey } from '../types';
./node_modules/jose/dist/types/jwt/decrypt.d.ts:/** Combination of JWE Decryption options and JWT Claims Set verification options. */
./node_modules/jose/dist/types/jwt/decrypt.d.ts:export interface JWTDecryptOptions extends DecryptOptions, JWTClaimVerificationOptions {
./node_modules/jose/dist/types/jwt/decrypt.d.ts: * Interface for JWT Decryption dynamic key resolution. No token components have been verified at
./node_modules/jose/dist/types/jwt/decrypt.d.ts:export interface JWTDecryptGetKey extends GetKeyFunction<CompactJWEHeaderParameters, FlattenedJWE> {
./node_modules/jose/dist/types/jwt/decrypt.d.ts: * Verifies the JWT format (to be a JWE Compact format), decrypts the ciphertext, validates the JWT
./node_modules/jose/dist/types/jwt/decrypt.d.ts: * @param key Private Key or Secret to decrypt and verify the JWT with. See
./node_modules/jose/dist/types/jwt/decrypt.d.ts: * @param options JWT Decryption and JWT Claims Set validation options.
./node_modules/jose/dist/types/jwt/decrypt.d.ts:export declare function jwtDecrypt<PayloadType = JWTPayload>(jwt: string | Uint8Array, key: KeyLike | Uint8Array, options?: JWTDecryptOptions): Promise<JWTDecryptResult<PayloadType>>;
./node_modules/jose/dist/types/jwt/decrypt.d.ts: * @param getKey Function resolving Private Key or Secret to decrypt and verify the JWT with. See
./node_modules/jose/dist/types/jwt/decrypt.d.ts: * @param options JWT Decryption and JWT Claims Set validation options.
./node_modules/jose/dist/types/jwt/decrypt.d.ts:export declare function jwtDecrypt<PayloadType = JWTPayload, KeyLikeType extends KeyLike = KeyLike>(jwt: string | Uint8Array, getKey: JWTDecryptGetKey, options?: JWTDecryptOptions): Promise<JWTDecryptResult<PayloadType> & ResolvedKey<KeyLikeType>>;
./node_modules/jose/dist/types/jwt/sign.d.ts:import type { JWK, JWTHeaderParameters, KeyLike, SignOptions } from '../types';
./node_modules/jose/dist/types/jwt/sign.d.ts:import { ProduceJWT } from './produce';
./node_modules/jose/dist/types/jwt/sign.d.ts: * The SignJWT class is used to build and sign Compact JWS formatted JSON Web Tokens.
./node_modules/jose/dist/types/jwt/sign.d.ts:export declare class SignJWT extends ProduceJWT {
./node_modules/jose/dist/types/jwt/sign.d.ts:     * Sets the JWS Protected Header on the SignJWT object.
./node_modules/jose/dist/types/jwt/sign.d.ts:    setProtectedHeader(protectedHeader: JWTHeaderParameters): this;
./node_modules/jose/dist/types/jwt/sign.d.ts:     * Signs and returns the JWT.
./node_modules/jose/dist/types/jwt/sign.d.ts:     * @param key Private Key or Secret to sign the JWT with. See
./node_modules/jose/dist/types/jwt/sign.d.ts:     * @param options JWT Sign options.
./node_modules/jose/dist/types/jwt/produce.d.ts:import type { JWTPayload } from '../types';
./node_modules/jose/dist/types/jwt/produce.d.ts:/** Generic class for JWT producing. */
./node_modules/jose/dist/types/jwt/produce.d.ts:export declare class ProduceJWT {
./node_modules/jose/dist/types/jwt/produce.d.ts:    protected _payload: JWTPayload;
./node_modules/jose/dist/types/jwt/produce.d.ts:    /** @param payload The JWT Claims Set object. Defaults to an empty object. */
./node_modules/jose/dist/types/jwt/produce.d.ts:    constructor(payload?: JWTPayload);
./node_modules/jose/dist/types/jwt/produce.d.ts:     * @param issuer "Issuer" Claim value to set on the JWT Claims Set.
./node_modules/jose/dist/types/jwt/produce.d.ts:     * @param subject "sub" (Subject) Claim value to set on the JWT Claims Set.
./node_modules/jose/dist/types/jwt/produce.d.ts:     * @param audience "aud" (Audience) Claim value to set on the JWT Claims Set.
./node_modules/jose/dist/types/jwt/produce.d.ts:     * Set the "jti" (JWT ID) Claim.
./node_modules/jose/dist/types/jwt/produce.d.ts:     * @param jwtId "jti" (JWT ID) Claim value to set on the JWT Claims Set.
./node_modules/jose/dist/types/jwt/produce.d.ts:     * @param input "nbf" (Not Before) Claim value to set on the JWT Claims Set.
./node_modules/jose/dist/types/jwt/produce.d.ts:     * @param input "exp" (Expiration Time) Claim value to set on the JWT Claims Set.
./node_modules/jose/dist/types/jwt/produce.d.ts:     * @param input "iat" (Expiration Time) Claim value to set on the JWT Claims Set.
./node_modules/jose/dist/types/types.d.ts:   * Use this when a given JWS/JWT/JWE profile requires the use of proprietary non-registered "crit"
./node_modules/jose/dist/types/types.d.ts:/** JWT Claims Set verification options. */
./node_modules/jose/dist/types/types.d.ts:export interface JWTClaimVerificationOptions {
./node_modules/jose/dist/types/types.d.ts:   * Expected JWT "aud" (Audience) Claim value(s).
./node_modules/jose/dist/types/types.d.ts:   * This option makes the JWT "aud" (Audience) Claim presence required.
./node_modules/jose/dist/types/types.d.ts:   * Expected JWT "iss" (Issuer) Claim value(s).
./node_modules/jose/dist/types/types.d.ts:   * This option makes the JWT "iss" (Issuer) Claim presence required.
./node_modules/jose/dist/types/types.d.ts:   * Maximum time elapsed (in seconds) from the JWT "iat" (Issued At) Claim value.
./node_modules/jose/dist/types/types.d.ts:   * This option makes the JWT "iat" (Issued At) Claim presence required.
./node_modules/jose/dist/types/types.d.ts:   * Expected JWT "sub" (Subject) Claim value.
./node_modules/jose/dist/types/types.d.ts:   * This option makes the JWT "sub" (Subject) Claim presence required.
./node_modules/jose/dist/types/types.d.ts:   * Expected JWT "typ" (Type) Header Parameter value.
./node_modules/jose/dist/types/types.d.ts:   * This option makes the JWT "typ" (Type) Header Parameter presence required.
./node_modules/jose/dist/types/types.d.ts:   * Array of required Claim Names that must be present in the JWT Claims Set. Default is that: if
./node_modules/jose/dist/types/types.d.ts:   * the {@link JWTClaimVerificationOptions.issuer `issuer` option} is set, then JWT "iss" (Issuer)
./node_modules/jose/dist/types/types.d.ts:   * Claim must be present; if the {@link JWTClaimVerificationOptions.audience `audience` option} is
./node_modules/jose/dist/types/types.d.ts:   * set, then JWT "aud" (Audience) Claim must be present; if the
./node_modules/jose/dist/types/types.d.ts:   * {@link JWTClaimVerificationOptions.subject `subject` option} is set, then JWT "sub" (Subject)
./node_modules/jose/dist/types/types.d.ts:   * {@link JWTClaimVerificationOptions.maxTokenAge `maxTokenAge` option} is set, then JWT "iat"
./node_modules/jose/dist/types/types.d.ts:   * Note: Unsecured JWTs (`{ "alg": "none" }`) are never accepted by this API.
./node_modules/jose/dist/types/types.d.ts:/** Recognized JWT Claims Set members, any other members may also be present. */
./node_modules/jose/dist/types/types.d.ts:export interface JWTPayload {
./node_modules/jose/dist/types/types.d.ts:   * JWT Issuer
./node_modules/jose/dist/types/types.d.ts:   * JWT Subject
./node_modules/jose/dist/types/types.d.ts:   * JWT Audience
./node_modules/jose/dist/types/types.d.ts:   * JWT ID
./node_modules/jose/dist/types/types.d.ts:   * JWT Not Before
./node_modules/jose/dist/types/types.d.ts:   * JWT Expiration Time
./node_modules/jose/dist/types/types.d.ts:   * JWT Issued At
./node_modules/jose/dist/types/types.d.ts:  /** Any other JWT Claim Set member. */
./node_modules/jose/dist/types/types.d.ts:export interface JWTVerifyResult<PayloadType = JWTPayload> {
./node_modules/jose/dist/types/types.d.ts:  /** JWT Claims Set. */
./node_modules/jose/dist/types/types.d.ts:  payload: PayloadType & JWTPayload
./node_modules/jose/dist/types/types.d.ts:  protectedHeader: JWTHeaderParameters
./node_modules/jose/dist/types/types.d.ts:export interface JWTDecryptResult<PayloadType = JWTPayload> {
./node_modules/jose/dist/types/types.d.ts:  /** JWT Claims Set. */
.bash: [72616: 2 (255)] tcsetattr: Inappropriate ioctl for device
__HERMES_FENCE_a9f7b3__logout

[Command timed out after 60s]
```

## 3. ROTATION & SCRUBBING PLAN
- **RINGY:** Rotate at app.ringy.com -> Settings -> API.
- **SANITY:** Rotate at sanity.io/manage -> Tokens.
- **SCRUB:** `git filter-repo --invert-paths --path .env --path .env.local --force`.
