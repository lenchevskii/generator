const { tail
      , compose
      , reverse
      , isUndefined
      }                   = require('lodash/fp')

const trace               = (x)         => { console.log(x); return x }

const rndmString          = (x)         => Math.random().toString(36).substr(2, x)

const checkDecade         = (N)         => N + Number(compose(reverse, tail, reverse)([...`${N}`]).join(''))

const endsWithZero        = (N)         => N % 10 === 0

const putBenchmark        = (id)        => id !== undefined ? console.time(`Insertion (${id}) processed in`) : []

const shootBenchmark      = (id)        => id !== undefined ? console.timeEnd(`Insertion (${id}) processed in`) : []

const errorDB             = (e, r, id)  => e ? trace(e.message)
                                              : trace(r.message === ''
                                                ? 'DB cleaned.\n'
                                                  : 'Add generation: ' + r.message
                                                    ) + shootBenchmark(id)

const stringifyMatrix     = (x)                   => x.map((y) =>`(${y[0]}, '${y[1]}', '${y[2]}')`).toLocaleString()


module.exports            = { trace, errorDB, stringifyMatrix, putBenchmark, shootBenchmark, rndmString, checkDecade, endsWithZero }