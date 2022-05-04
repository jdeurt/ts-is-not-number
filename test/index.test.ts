import isNotNumber from '../src/index'
import assert from 'assert'

test('is not a number', () => {
  const fixtures = [
    '   ',
    '\r\n\t',
    '',
    '',
    '3a',
    'abc',
    'false',
    'null',
    'true',
    'undefined',
    +'abc',
    +/foo/,
    +[1, 2, 4],
    +Infinity,
    +Math.sin,
    +NaN,
    //@ts-ignore
    +undefined,
    +{ a: 1 },
    +{},
    /foo/,
    [1, 2, 3],
    [1],
    [],
    true,
    false,
    +function () {},
    function () {},
    Infinity,
    -Infinity,
    Math.sin,
    NaN,
    new Date(),
    null,
    undefined,
    {},
  ]

  fixtures.forEach((num) => {
    expect(isNotNumber(num)).toBe(true)
  })
})

test('is not not a number', () => {
  const fixtures = [
    0xff,
    5e3,
    0,
    0.1,
    -0.1,
    -1.1,
    37,
    3.14,

    1,
    1.1,
    10,
    10.1,
    100,
    -100,

    '0.1',
    '-0.1',
    '-1.1',
    '0',
    '012',
    '0xff',
    '1',
    '1.1',
    '10',
    '10.10',
    '100',
    '5e3',
    '   56\r\n  ',

    Math.LN2,

    parseInt('012'),
    parseFloat('012'),
    Math.abs(1),
    Math.acos(1),
    Math.asin(1),
    Math.atan(1),
    Math.atan2(1, 2),
    Math.ceil(1),
    Math.cos(1),
    Math.E,
    Math.exp(1),
    Math.floor(1),
    Math.LN10,
    Math.LN2,
    Math.log(1),
    Math.LOG10E,
    Math.LOG2E,
    Math.max(1, 2),
    Math.min(1, 2),
    Math.PI,
    Math.pow(1, 2),
    Math.pow(5, 5),
    //@ts-ignore
    Math.random(1),
    Math.round(1),
    Math.sin(1),
    Math.sqrt(1),
    Math.SQRT1_2,
    Math.SQRT2,
    Math.tan(1),

    Number.MAX_VALUE,
    Number.MIN_VALUE,

    '0.0',
    '0x0',
    '0e+5',
    '000',
    '0.0e-5',
    '0.0E5',

    +'',
    +1,
    +3.14,
    +37,
    +5,
    +[],
    +false,
    +Math.LN2,
    +true,
    //@ts-ignore
    +null,
    +new Date(),
  ]

  fixtures.forEach((num) => {
    expect(isNotNumber(num)).toBe(false)
  })
})
