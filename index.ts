console.clear();
import { from, interval, of } from 'rxjs';
import { fromArray } from 'rxjs/internal/observable/fromArray';
import {
  toArray,
  take,
  tap,
  mergeAll,
  map,
  reduce,
  filter
} from 'rxjs/operators';

of({ MK: 'jjj' })
  .pipe(
    filter(Boolean),
    map(Object.entries),
    map(v => from(v)),
    mergeAll(),
    map(([v, d]) => ({ v, d })),
    toArray()
  )
  .subscribe(console.log);
